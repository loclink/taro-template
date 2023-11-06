"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = exports.NavigateType = void 0;
var taro_1 = __importStar(require("@tarojs/taro"));
var constants_1 = require("../constants");
var no_page_1 = require("../exception/no-page");
var func_1 = require("../func");
var middleware_1 = require("../middleware");
var page_data_1 = require("../page-data");
var router_back_listener_1 = require("../router-back-listener");
var type_1 = require("./type");
var lodash_1 = require("lodash");
var type_2 = require("./type");
Object.defineProperty(exports, "NavigateType", { enumerable: true, get: function () { return type_2.NavigateType; } });
/**
 * 私有导航方法（未经过防抖处理）
 * @param route 目标路由对象
 * @param options 跳转选项
 */
var _navigate = function (route, options) { return __awaiter(void 0, void 0, void 0, function () {
    var route_key, context, middlewares, url;
    return __generator(this, function (_a) {
        options = __assign({ type: type_1.NavigateType.navigateTo, params: {} }, options);
        options.params = Object.assign({}, options.params);
        route_key = Date.now() + "";
        taro_1.Current["_page"] = taro_1.Current.page;
        Object.defineProperties(taro_1.Current, {
            page: {
                set: function (page) {
                    if (page === undefined || page === null) {
                        this._page = page;
                        return;
                    }
                    if (!page[constants_1.ROUTE_KEY]) {
                        var originOnUnload_1 = page.onUnload;
                        page.onUnload = function () {
                            originOnUnload_1 && originOnUnload_1.apply(this);
                            page_data_1.PageData.emitBack(route_key);
                            setTimeout(function () { return (0, router_back_listener_1.execRouterBackListener)(route); });
                        };
                        page[constants_1.ROUTE_KEY] = route_key;
                    }
                    this._page = page;
                },
                get: function () {
                    return this._page;
                },
            },
        });
        if (options.data) {
            page_data_1.PageData.setPageData(route_key, options.data);
        }
        context = {
            route: route,
            type: options.type,
            params: options.params,
            data: options.data,
        };
        middlewares = (0, middleware_1.getMiddlewares)(context);
        url = (0, func_1.formatPath)(route, options.params);
        middlewares.push(function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = options.type;
                        switch (_a) {
                            case type_1.NavigateType.reLaunch: return [3 /*break*/, 1];
                            case type_1.NavigateType.redirectTo: return [3 /*break*/, 3];
                            case type_1.NavigateType.switchTab: return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 7];
                    case 1: return [4 /*yield*/, taro_1.default.reLaunch({ url: url })];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 3: return [4 /*yield*/, taro_1.default.redirectTo({ url: url })];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 5: return [4 /*yield*/, taro_1.default.switchTab({ url: url })];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, taro_1.default.navigateTo({ url: url })];
                    case 8:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 9:
                        next();
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/, new Promise(function (res, rej) { return __awaiter(void 0, void 0, void 0, function () {
                var err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            page_data_1.PageData.setPagePromise(route_key, { res: res, rej: rej });
                            return [4 /*yield*/, (0, middleware_1.execMiddlewares)(middlewares, context)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            rej(err_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); })];
    });
}); };
// 加防抖
var debounceNavigate = (0, lodash_1.debounce)(function (route, options) {
    return new Promise(function (resolve, reject) {
        _navigate(route, options).then(resolve).catch(reject);
    });
}, 1000, { leading: true, trailing: false });
var Router = exports.Router = /** @class */ (function () {
    function Router() {
    }
    /**
     * 页面导航跳转
     * @param route 目标路由对象
     * @param options 跳转选项
     */
    Router.navigate = function (route, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if ((options === null || options === void 0 ? void 0 : options.debounce) === undefined)
                    options.debounce = true;
                if ((options === null || options === void 0 ? void 0 : options.type) === type_1.NavigateType.switchTab || !(options === null || options === void 0 ? void 0 : options.debounce)) {
                    return [2 /*return*/, _navigate(route, options)];
                }
                else {
                    return [2 /*return*/, debounceNavigate(route, options)];
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * 返回上一个页面
     * @param result 返回给上一个页面的数据，如果 result 是 Error 的实例，则是抛出异常给上一个页面
     * @param options 其他选项
     */
    Router.back = function (result, options) {
        if (!(0, func_1.isNil)(result)) {
            page_data_1.PageData.setBackResult(result);
        }
        var currentPages = taro_1.default.getCurrentPages();
        if (currentPages.length > 1) {
            return taro_1.default.navigateBack(options);
        }
        throw new no_page_1.NoPageException();
    };
    /**
     * 设置页面返回的数据
     * 当物理键返回和左上角返回也需要带数据时会使用到
     */
    Router.setBackResult = function (result) {
        page_data_1.PageData.setBackResult(result);
    };
    /**
     * 获取上一个页面携带过来的数据
     * @param default_value 默认数据
     */
    Router.getData = function (default_value) {
        return page_data_1.PageData.getPageData(default_value);
    };
    /** 获取上一个页面携带过来的参数 */
    Router.getParams = function () {
        var _a;
        var instance = (0, taro_1.getCurrentInstance)();
        return Object.assign({}, (_a = instance.router) === null || _a === void 0 ? void 0 : _a.params);
    };
    /**
     * 获取当前页面的路径
     * @returns string
     */
    Router.getPagePath = function () {
        var instance = (0, taro_1.getCurrentInstance)();
        return instance.router.path;
    };
    Router.toAuth = function (options) { return Router.navigate({ url: "/pages/auth/index", ext: {} }, options); };
    Router.tabbar = {
        toHome: function (options) { return Router.navigate({ url: "/pages/tabbar/home/index", ext: {} }, options); },
        toProfile: function (options) { return Router.navigate({ url: "/pages/tabbar/profile/index", ext: {} }, options); }
    };
    Router.profile = {
        toUser_Info: function (options) { return Router.navigate({ url: "/pages-sub/profile/user-info/index", ext: {} }, options); }
    };
    return Router;
}());
