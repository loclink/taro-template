import * as fs from "fs-extra";
import { copyDir } from "little-spanner";
import { PluginOptions } from "template-types";
import { RICH_TEXT } from "../constant";
import { getRichTextTargetPath, getRichTextTempPath } from "./handle-path";
import { IContext } from "src/types";

export const handleGenerateRichText = async (ctx: IContext) => {
  const pluginConfig = ctx.pluginConfigModel?.getConfig<PluginOptions>();
  const appConfig = ctx.appConfigModel?.getConfig();

  let cpns = appConfig?.usingComponents || {};

  if (pluginConfig?.usingComponents?.includes(RICH_TEXT)) {
    console.log(ctx.helper.chalk.green(`✨ 已启用rich-text组件`));
    if (!cpns.parse) {
      cpns = {
        ...cpns,
        parse: "./components/rich-text/parse/index",
      };
      const finalCpnsStr = JSON.stringify(cpns);
      ctx.appConfigModel?.setConfig("usingComponents", finalCpnsStr);
    }

    if (fs.existsSync(getRichTextTargetPath(ctx))) return;
    copyDir(getRichTextTempPath(), getRichTextTargetPath(ctx));
    console.log(
      ctx.helper.chalk.green(
        `✅ rich-text组件已同步至: ${getRichTextTargetPath(ctx)}`
      )
    );
  } else {
    if (!cpns.parse) return;
    delete cpns.parse;
    const finalCpnsStr = JSON.stringify(cpns);
    ctx.appConfigModel?.setConfig("usingComponents", finalCpnsStr);
  }
};
