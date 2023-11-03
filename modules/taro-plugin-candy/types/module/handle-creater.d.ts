import { IContext } from "../types";
/**
 *
 * @param componentName 页面
 * @param componentDir   页面目录
 * @param cssExt:文件后缀
 * @param log 日志工具
 */
export declare function PageGenerator(ctx: IContext, pagePath: string, pageName: string): void;
export declare const generatorMainPackagePage: (ctx: IContext, pagePath: string) => void;
export declare const generatorSubPackagePage: (ctx: IContext, pagePath: string) => void;
export declare const generatorTabBarPage: (ctx: IContext, pagePath: string) => void;
