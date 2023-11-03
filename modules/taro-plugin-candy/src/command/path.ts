import { IPluginContext } from "@tarojs/service";
import { handleInitAppConfig } from "../module/handle-init";

export const handlePathCommand = async (ctx: IPluginContext) => {
  await handleInitAppConfig(ctx);
  process.exit(0);
};

