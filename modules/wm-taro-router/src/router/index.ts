import Taro, { Current, getCurrentInstance } from "@tarojs/taro";
import { ROUTE_KEY } from "../constants";
import { NoPageException } from "../exception/no-page";
import { formatPath, isNil } from "../func";
import { execMiddlewares, getMiddlewares } from "../middleware";
import { PageData } from "../page-data";
import { execRouterBackListener } from "../router-back-listener";
import { NavigateOptions, NavigateType, Route } from "./type";
import { debounce } from "lodash";
export { NavigateOptions, NavigateType, Route } from "./type";

/**
 * 私有导航方法（未经过防抖处理）
 * @param route 目标路由对象
 * @param options 跳转选项
 */
const _navigate = async <T = any>(
  route: Route,
  options?: NavigateOptions
): Promise<T> => {
  options = { ...{ type: NavigateType.navigateTo, params: {} }, ...options };
  options.params = Object.assign({}, options.params);
  const route_key = Date.now() + "";

  Current["_page"] = Current.page;
  Object.defineProperties(Current, {
    page: {
      set: function (page) {
        if (page === undefined || page === null) {
          this._page = page;
          return;
        }
        if (!page[ROUTE_KEY]) {
          const originOnUnload = page.onUnload;
          page.onUnload = function () {
            originOnUnload && originOnUnload.apply(this);
            PageData.emitBack(route_key);
            setTimeout(() => execRouterBackListener(route));
          };
          page[ROUTE_KEY] = route_key;
        }
        this._page = page;
      },
      get: function () {
        return this._page;
      },
    },
  });

  if (options.data) {
    PageData.setPageData(route_key, options.data);
  }

  const context = {
    route,
    type: options.type!,
    params: options.params,
    data: options.data,
  };

  const middlewares = getMiddlewares(context);
  const url = formatPath(route, options!.params!);
  middlewares.push(async (ctx, next) => {
    switch (options!.type) {
      case NavigateType.reLaunch:
        await Taro.reLaunch({ url });
        break;
      case NavigateType.redirectTo:
        await Taro.redirectTo({ url });
        break;
      case NavigateType.switchTab:
        await Taro.switchTab({ url });
        break;
      default:
        await Taro.navigateTo({ url });
        break;
    }
    next();
  });

  return new Promise(async (res, rej) => {
    try {
      PageData.setPagePromise(route_key, { res, rej });
      await execMiddlewares(middlewares, context);
    } catch (err) {
      rej(err);
    }
  });
};

// 加防抖
const debounceNavigate = debounce(
  (route: Route, options?: NavigateOptions) => {
    return new Promise((resolve, reject) => {
      _navigate(route, options).then(resolve).catch(reject);
    });
  },
  1000,
  { leading: true, trailing: false }
);

export class Router {
  /**
   * 页面导航跳转
   * @param route 目标路由对象
   * @param options 跳转选项
   */
  static async navigate<T = any>(
    route: Route,
    options: NavigateOptions = {}
  ): Promise<T> {
    if (options?.debounce === undefined) options.debounce = true;
    if (options?.type === NavigateType.switchTab || !options?.debounce) {
      return _navigate(route, options) as Promise<T>;
    } else {
      return debounceNavigate(route, options) as Promise<T>;
    }
  }

  /**
   * 返回上一个页面
   * @param result 返回给上一个页面的数据，如果 result 是 Error 的实例，则是抛出异常给上一个页面
   * @param options 其他选项
   */
  static back(
    result?: unknown,
    options?: {
      /** 返回的页面数，如果 delta 大于现有页面数，则返回到首页。 */
      delta?: number;
    }
  ) {
    if (!isNil(result)) {
      PageData.setBackResult(result);
    }

    const currentPages = Taro.getCurrentPages();
    if (currentPages.length > 1) {
      return Taro.navigateBack(options);
    }

    throw new NoPageException();
  }

  /**
   * 设置页面返回的数据
   * 当物理键返回和左上角返回也需要带数据时会使用到
   */
  static setBackResult(result: any) {
    PageData.setBackResult(result);
  }

  /**
   * 获取上一个页面携带过来的数据
   * @param default_value 默认数据
   */
  static getData<T = any>(default_value?: T): T | undefined {
    return PageData.getPageData(default_value);
  }

  /** 获取上一个页面携带过来的参数 */
  static getParams() {
    const instance = getCurrentInstance();
    return Object.assign({}, instance.router?.params);
  }

  /**
   * 获取当前页面的路径
   * @returns string
   */
  static getPagePath() {
    const instance = getCurrentInstance();
    return instance.router!.path;
  }
}
