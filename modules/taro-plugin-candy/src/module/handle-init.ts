import * as fs from "fs-extra";
import * as path from "path";
import { IPluginContext } from "@tarojs/service";
import { getPagesPath, getSubPackagePath, getTabbarPath } from "./handle-path";
import { PluginOptions } from "template-types";
import { IContext } from "src/types";

/**
 * app.config.ts初始化
 * @param ctx
 */
export const handleInitAppConfig = async (ctx: IContext) => {
  const pagesConfig = await generateMainPackagePaths(ctx);
  const subPackagesPaths = await generateSubPackagePaths(ctx);
  ctx.appConfigModel?.setConfig(
    "pages",
    JSON.stringify(pagesConfig.pagesPaths),
    false
  );
  if (ctx.pluginConfigModel?.getConfig<PluginOptions>().tabbarType) {
    ctx.appConfigModel?.setConfig(
      "tabBar",
      JSON.stringify(pagesConfig.tabbarPaths),
      false
    );
  } else {
    ctx.appConfigModel?.remove("tabBar");
  }

  ctx.appConfigModel?.setConfig(
    "subPackages",
    JSON.stringify(subPackagesPaths),
    false
  );

  ctx.appConfigModel?.saveConfig();

  console.log(ctx.helper.chalk.green(`✅ 页面路径已自动同步成功`));
};

/** 生成分包路径配置 */
export const generateSubPackagePaths = async (ctx: IPluginContext) => {
  const subPackagePath = await getSubPackagePath(ctx);
  const pagesSubPathArr = fs
    .readdirSync(subPackagePath)
    .map((subName) => {
      const root = `pages-sub/${subName}`;
      const pages = fs
        .readdirSync(path.join(subPackagePath, subName))
        .map((item) => {
          const pageSubCpnPath = path.join(
            subPackagePath,
            subName,
            item,
            "index.tsx"
          );
          if (fs.pathExistsSync(pageSubCpnPath)) {
            return `${item}/index`;
          }
        })
        .filter((item) => item);

      if (pages.length) {
        return {
          root,
          pages,
        };
      }
    })
    .filter((item) => item);

  return pagesSubPathArr;
};

/** 生成tabbar路径配置 */
export const generateTabbarPaths = async (ctx: IContext) => {
  const tabbarPath = getTabbarPath(ctx);
  if (!fs.pathExistsSync(tabbarPath)) {
    return {
      custom: true,
      list: [],
    };
  }

  const tabbarDir = ctx.pluginConfigModel?.getConfig<PluginOptions>().tabbarDir;
  const tabbarPaths = fs
    .readdirSync(tabbarPath)
    .map((item) => {
      const pageCpnPath = path.join(tabbarPath, item, "index.tsx");
      if (fs.pathExistsSync(pageCpnPath)) {
        return {
          text: item,
          pagePath: `pages/${tabbarDir}/${item}/index`,
        };
      }
    })
    .filter((item) => item);

  return {
    custom: true,
    list: tabbarPaths,
  };
};

/** 生成主包路径配置 */
export const generateMainPackagePaths = async (ctx: IPluginContext) => {
  const tabbarPaths = await generateTabbarPaths(ctx);

  let pagesPathArr = fs
    .readdirSync(getPagesPath(ctx))
    .map((item) => {
      const pageCpnPath = path.join(
        ctx.paths.sourcePath,
        "./pages",
        item,
        "index.tsx"
      );
      if (fs.pathExistsSync(pageCpnPath)) {
        return `pages/${item}/index`;
      }
    })
    .filter((item) => item);

  const tabbarPathArr = tabbarPaths.list.map((item) => item?.pagePath);
  pagesPathArr = [...pagesPathArr, ...tabbarPathArr];
  pagesPathArr = await handleHomePage(ctx, pagesPathArr);
  return { pagesPaths: pagesPathArr, tabbarPaths };
};

const handleHomePage = async (
  ctx: IContext,
  pathsPathArr: (string | undefined)[]
) => {
  const homePage = ctx.pluginConfigModel?.getConfig<PluginOptions>().homePage;
  const homePathStr = pathsPathArr.find((item) => `/${item}` === homePage);
  if (homePathStr) {
    const finalPaths = pathsPathArr.filter((item) => `/${item}` !== homePage);
    finalPaths.unshift(homePathStr);
    return finalPaths;
  } else {
    return pathsPathArr;
  }
};
