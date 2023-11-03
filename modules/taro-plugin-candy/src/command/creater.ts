import { validPath } from "../utils";
import {
  generatorMainPackagePage,
  generatorSubPackagePage,
  generatorTabBarPage,
} from "../module/handle-creater";
import { IContext } from "../types";

export const handleCreater = async (ctx: IContext, { _ }) => {
  if (_?.length < 2) {
    console.log(ctx.helper.chalk.red("请输入页面路径"));
  } else {
    const cmd = _[0];
    const path = _[1];
    if (!validPath(path)) {
      console.log(ctx.helper.chalk.red("页面路径不合法"));
      process.exit(0);
    }
    switch (cmd) {
      case "gp":
        generatorMainPackagePage(ctx, path);
        break;
      case "gs":
        generatorSubPackagePage(ctx, path);
        break;
      case "gt":
        generatorTabBarPage(ctx, path);
        break;
    }
  }

  process.exit(0);
};
