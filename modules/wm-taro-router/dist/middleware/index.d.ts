import { Middleware, MiddlewareCondition, RouteContext } from './type';
export { Middleware, RouteContext, MiddlewareCondition };
export declare const middlewareCollection: {
    middlewares: Middleware[];
    condition?: MiddlewareCondition;
}[];
export declare function registerMiddleware(middleware: Middleware, condition?: MiddlewareCondition): void;
export declare function registerMiddlewares(middlewares: Middleware[], condition?: MiddlewareCondition): void;
export declare function getMiddlewares(ctx: RouteContext): Middleware[];
export declare function execMiddlewares(middlewares: Middleware[], ctx: RouteContext): Promise<any>;
