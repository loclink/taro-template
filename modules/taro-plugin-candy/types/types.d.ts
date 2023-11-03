import { IPluginContext } from "@tarojs/service";
import { IConfigModel } from "little-spanner";
export type IContext = IPluginContext & {
    pluginConfigModel?: IConfigModel;
    appConfigModel?: IConfigModel;
};
