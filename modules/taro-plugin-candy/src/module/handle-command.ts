import { handleCreater } from "../command/creater";
import { handlePathCommand } from "../command/path";
import { IContext } from "../types";

export const registerCommand = (ctx: IContext) => {
  ctx.registerCommand({
    name: "path",
    fn: async () => await handlePathCommand(ctx),
  });

  ctx.registerCommand({
    name: "gs",
    synopsisList: [
      "taro gs home/goods-list     (在分包目录中生成home/goods-list, 例如: pages-sub/home/goods-list)",
    ],
    fn: async (opt) => await handleCreater(ctx, opt),
  });

  ctx.registerCommand({
    name: "gp",
    synopsisList: ["taro gp auth     (在主包目录中生成auth, 例如: pages/auth)"],
    fn: async (opt) => await handleCreater(ctx, opt),
  });

  ctx.registerCommand({
    name: "gt",
    synopsisList: [
      "taro gt profile     (在tabbar中生成profile, 例如: pages/tabbar/profile)",
    ],
    fn: async (opt) => await handleCreater(ctx, opt),
  });
};
