import * as path from "path";
import { handleGenerateRichText } from "./module/handle-rich-text";
import { getPluginConfigPath } from "./module/handle-path";
import { handleInitAppConfig } from "./module/handle-init";
import { registerCommand } from "./module/handle-command";
import { loadAppConfig, loadPluginConfig } from "little-spanner";
import { IContext } from "./types";
import { PluginOptions } from "template-types";

/**
 * 命令行扩展
 */
export default async (ctx: IContext) => {
  if (process.env.NODE_ENV === "production") return;

  ctx.pluginConfigModel = await loadPluginConfig(ctx.paths.sourcePath);
  ctx.appConfigModel = await loadAppConfig(ctx.paths.sourcePath);

  const subPackageDir =
    ctx.pluginConfigModel?.getConfig<PluginOptions>().subPackageDir;

  registerCommand(ctx);

  ctx.helper.chokidar
    .watch([getPluginConfigPath(ctx)])
    .on("change", async () => {
      await handleGenerateRichText(ctx);
      await handleInitAppConfig(ctx);
    });

  ctx.helper.chokidar
    .watch(
      [
        path.join(ctx.paths.sourcePath, "pages/**/index.tsx"),
        path.join(ctx.paths.sourcePath, `${subPackageDir}/*/*/index.tsx`),
      ],
      { ignoreInitial: true }
    )
    .on("add", () => handleInitAppConfig(ctx));

  // ctx.onBuildComplete(async () => {});

  ctx.onBuildStart(async () => {
    await handleGenerateRichText(ctx);
    await handleInitAppConfig(ctx);
  });
  // ctx.onBuildFinish(() => {});
};
