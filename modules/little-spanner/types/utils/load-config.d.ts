import { IConfigModel, LoadConfig } from "src/types";
export declare const loadConfig: LoadConfig;
/**
 * 读取插件配置
 * @param configPath
 * @returns
 */
export declare const loadPluginConfig: (sourcePath: string) => Promise<IConfigModel | undefined>;
export declare const loadAppConfig: (sourcePath: string) => Promise<IConfigModel | undefined>;
