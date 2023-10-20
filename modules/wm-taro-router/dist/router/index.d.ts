import { NavigateOptions, Route } from "./type";
export { NavigateOptions, NavigateType, Route } from "./type";
export declare class Router {
    /**
     * 页面导航跳转
     * @param route 目标路由对象
     * @param options 跳转选项
     */
    static navigate<T = any>(route: Route, options?: NavigateOptions): Promise<T>;
    /**
     * 返回上一个页面
     * @param result 返回给上一个页面的数据，如果 result 是 Error 的实例，则是抛出异常给上一个页面
     * @param options 其他选项
     */
    static back(result?: unknown, options?: {
        /** 返回的页面数，如果 delta 大于现有页面数，则返回到首页。 */
        delta?: number;
    }): Promise<TaroGeneral.CallbackResult>;
    /**
     * 设置页面返回的数据
     * 当物理键返回和左上角返回也需要带数据时会使用到
     */
    static setBackResult(result: any): void;
    /**
     * 获取上一个页面携带过来的数据
     * @param default_value 默认数据
     */
    static getData<T = any>(default_value?: T): T | undefined;
    /** 获取上一个页面携带过来的参数 */
    static getParams(): Partial<Record<string, string>>;
    /**
     * 获取当前页面的路径
     * @returns string
     */
    static getPagePath(): string;
    static toAuth: RequiredKeys<NavigateOptions & Params<import('/Users/loclink/Project/wm-taro-template/packages/taro-template/src/pages/auth/route.config').Params> & Data<import('/Users/loclink/Project/wm-taro-template/packages/taro-template/src/pages/auth/route.config').Data>> extends never ? <T = any>(options?: NavigateOptions & Params<import('/Users/loclink/Project/wm-taro-template/packages/taro-template/src/pages/auth/route.config').Params> & Data<import('/Users/loclink/Project/wm-taro-template/packages/taro-template/src/pages/auth/route.config').Data>) => Promise<T> : <T = any>(options: NavigateOptions & Params<import('/Users/loclink/Project/wm-taro-template/packages/taro-template/src/pages/auth/route.config').Params> & Data<import('/Users/loclink/Project/wm-taro-template/packages/taro-template/src/pages/auth/route.config').Data>) => Promise<T>;
    static tabbar: {
        toHome: RequiredKeys<NavigateOptions & Params<import('/Users/loclink/Project/wm-taro-template/packages/taro-template/src/pages/tabbar/home/route.config').Params> & Data<import('/Users/loclink/Project/wm-taro-template/packages/taro-template/src/pages/tabbar/home/route.config').Data>> extends never ? <T = any>(options?: NavigateOptions & Params<import('/Users/loclink/Project/wm-taro-template/packages/taro-template/src/pages/tabbar/home/route.config').Params> & Data<import('/Users/loclink/Project/wm-taro-template/packages/taro-template/src/pages/tabbar/home/route.config').Data>) => Promise<T> : <T = any>(options: NavigateOptions & Params<import('/Users/loclink/Project/wm-taro-template/packages/taro-template/src/pages/tabbar/home/route.config').Params> & Data<import('/Users/loclink/Project/wm-taro-template/packages/taro-template/src/pages/tabbar/home/route.config').Data>) => Promise<T>;
        toProfile: RequiredKeys<NavigateOptions & Params<import('/Users/loclink/Project/wm-taro-template/packages/taro-template/src/pages/tabbar/profile/route.config').Params> & Data<import('/Users/loclink/Project/wm-taro-template/packages/taro-template/src/pages/tabbar/profile/route.config').Data>> extends never ? <T = any>(options?: NavigateOptions & Params<import('/Users/loclink/Project/wm-taro-template/packages/taro-template/src/pages/tabbar/profile/route.config').Params> & Data<import('/Users/loclink/Project/wm-taro-template/packages/taro-template/src/pages/tabbar/profile/route.config').Data>) => Promise<T> : <T = any>(options: NavigateOptions & Params<import('/Users/loclink/Project/wm-taro-template/packages/taro-template/src/pages/tabbar/profile/route.config').Params> & Data<import('/Users/loclink/Project/wm-taro-template/packages/taro-template/src/pages/tabbar/profile/route.config').Data>) => Promise<T>;
    };
    static profile: {
        toUser_Info: RequiredKeys<NavigateOptions & Params<import('/Users/loclink/Project/wm-taro-template/packages/taro-template/src/pages-sub/profile/user-info/route.config').Params> & Data<import('/Users/loclink/Project/wm-taro-template/packages/taro-template/src/pages-sub/profile/user-info/route.config').Data>> extends never ? <T = any>(options?: NavigateOptions & Params<import('/Users/loclink/Project/wm-taro-template/packages/taro-template/src/pages-sub/profile/user-info/route.config').Params> & Data<import('/Users/loclink/Project/wm-taro-template/packages/taro-template/src/pages-sub/profile/user-info/route.config').Data>) => Promise<T> : <T = any>(options: NavigateOptions & Params<import('/Users/loclink/Project/wm-taro-template/packages/taro-template/src/pages-sub/profile/user-info/route.config').Params> & Data<import('/Users/loclink/Project/wm-taro-template/packages/taro-template/src/pages-sub/profile/user-info/route.config').Data>) => Promise<T>;
    };
}
declare type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];
declare type Data<Q> = RequiredKeys<Q> extends never ? {
    data?: Q;
} : {
    data: Q;
};
declare type Params<P> = RequiredKeys<P> extends never ? {
    params?: P;
} : {
    params: P;
};
