import { IPluginContext } from "@tarojs/service";
import { IContext } from "src/types";
export declare const handleInitAppConfig: (ctx: IContext) => Promise<void>;
/** 生成分包路径配置 */
export declare const generateSubPackagePaths: (ctx: IPluginContext) => Promise<({
    root: string;
    pages: (string | undefined)[];
} | undefined)[]>;
/** 生成tabbar路径配置 */
export declare const generateTabbarPaths: (ctx: IContext) => Promise<{
    custom: boolean;
    list: ({
        text: string;
        pagePath: string;
    } | undefined)[];
}>;
/** 生成主包路径配置 */
export declare const generateMainPackagePaths: (ctx: IPluginContext) => Promise<{
    pagesPaths: (string | undefined)[];
    tabbarPaths: {
        custom: boolean;
        list: ({
            text: string;
            pagePath: string;
        } | undefined)[];
    };
}>;
