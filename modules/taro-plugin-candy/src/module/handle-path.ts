import { IPluginContext } from "@tarojs/service";
import * as path from "path";
import { APP_CONFIG_FILE_NAME, PLUGIN_CONFIG_FILE_NAME } from "../constant";
import { PluginOptions } from "template-types";
import { IContext } from "src/types";

export const getTemplatePath = () => {
  return path.resolve(__dirname, "../../templates");
};

export const getAppConfigPath = (ctx: IPluginContext) => {
  return path.resolve(ctx.paths.sourcePath, APP_CONFIG_FILE_NAME);
};

export const getPluginConfigPath = (ctx: IPluginContext) => {
  return path.resolve(ctx.paths.sourcePath, PLUGIN_CONFIG_FILE_NAME);
};

export const getComponentsPath = (ctx: IPluginContext) => {
  return path.resolve(ctx.paths.sourcePath, "components");
};

export const getRichTextTargetPath = (ctx: IPluginContext) => {
  return path.join(getComponentsPath(ctx), "rich-text");
};

export const getRichTextTempPath = () => {
  return path.join(getTemplatePath(), "rich-text");
};

export const getPagesPath = (ctx: IPluginContext) => {
  return path.resolve(ctx.paths.sourcePath, "pages");
};

export const getSubPackagePath = async (ctx: IContext) => {
  const pluginConfig = ctx.pluginConfigModel?.getConfig<PluginOptions>();
  return path.resolve(
    ctx.paths.sourcePath,
    pluginConfig?.subPackageDir || "pages-sub"
  );
};

export const getTabbarPath = (ctx: IPluginContext) => {
  return path.join(getPagesPath(ctx), "tabbar");
};
