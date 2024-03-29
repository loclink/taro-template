import { IPluginContext } from "@tarojs/service";
import { IContext } from "src/types";
export declare const getTemplatePath: () => string;
export declare const getAppConfigPath: (ctx: IPluginContext) => string;
export declare const getPluginConfigPath: (ctx: IPluginContext) => string;
export declare const getComponentsPath: (ctx: IPluginContext) => string;
export declare const getRichTextTargetPath: (ctx: IPluginContext) => string;
export declare const getRichTextTempPath: () => string;
export declare const getPagesPath: (ctx: IPluginContext) => string;
export declare const getSubPackagePath: (ctx: IContext) => Promise<string>;
export declare const getTabbarPath: (ctx: IPluginContext) => string;
