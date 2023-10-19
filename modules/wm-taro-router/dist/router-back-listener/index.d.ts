import { Route } from '..';
import { RouterBackListener } from './type';
export { RouterBackListener };
export declare const routerBackListenerCollection: RouterBackListener[];
/** 注册全局路由返回监听 */
export declare function registerRouterBackListener(listener: RouterBackListener): void;
export declare function execRouterBackListener(from: Route): void;
