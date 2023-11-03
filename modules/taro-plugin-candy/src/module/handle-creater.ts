import * as fs from "fs-extra";
import * as path from "path";
import { toCamelCase } from "../utils";
import { IContext } from "../types";
import { getPagesPath } from "./handle-path";
import { PluginOptions } from "template-types";

/**
 *
 * @param group 页面分组
 * @param name  页面名称
 */
const tsx = ({ name }) => {
  return `import React, { memo } from "react";
import { View } from "@tarojs/components";
import { PageContainer } from "wm-taro-design";
import styles from "./index.module.less";

const Component: React.FC = () => {
  return (
    <PageContainer title='${toCamelCase(name, true)}'>
      <View className={styles.${toCamelCase(name)}Wrapper}>${toCamelCase(
    name,
    true
  )}</View>
    </PageContainer>
  );
};

const ${toCamelCase(name, true)} = memo(Component)
export default ${toCamelCase(name, true)};

/**
 * 定义页面配置，需要注意的是，使用 definePageConfig 定义的页面配置对象不能使用变量。
 * 参考: https://docs.taro.zone/docs/page-config#配置项列表
 */
definePageConfig({
  disableScroll: true
});
`;
};

const style = (name) =>
  `.${toCamelCase(name)}Wrapper{
  // css style 
}
`;

const route = () => `// 定义进入该页面需要传入的 params 参数的类型
export type Params = {};

// 定义进入该页面需要传入的 data 数据的类型
export type Data = {};

// 导出附加数据 Ext (附加数据是传递给中间件使用的)
export const Ext = {};

// 定义该页面返回的数据的类型
export type BackData = {};

`;
//生产
/**
 *
 * @param componentName 页面
 * @param componentDir   页面目录
 * @param cssExt:文件后缀
 * @param log 日志工具
 */
export function PageGenerator(
  ctx: IContext,
  pagePath: string,
  pageName: string
) {
  fs.ensureDirSync(pagePath);

  // index.tsx
  fs.writeFileSync(path.join(pagePath, `index.tsx`), tsx({ name: pageName }));
  console.log(
    ctx.helper.chalk.green("创建成功: \n" + path.join(pagePath, `index.tsx`))
  );

  // index.less
  fs.writeFileSync(path.join(pagePath, `index.module.less`), style(pageName));
  console.log(
    ctx.helper.chalk.green(
      "创建成功: \n" + path.join(pagePath, `index.module.less`)
    )
  );

  // route.config.ts
  fs.writeFileSync(path.join(pagePath, `route.config.ts`), route());
  console.log(
    ctx.helper.chalk.green(
      "创建成功: \n" + path.join(pagePath, `route.config.ts`)
    )
  );
}

export const generatorMainPackagePage = (ctx: IContext, pagePath: string) => {
  if (pagePath.includes("/")) {
    console.log(ctx.helper.chalk.red("主包页面路径只允许一级"));
    return;
  } else {
    const finalDir = path.resolve(getPagesPath(ctx), pagePath);
    const pageName = pagePath;
    PageGenerator(ctx, finalDir, pageName);
  }
};

export const generatorSubPackagePage = (ctx: IContext, pagePath: string) => {
  const pagePathArr = pagePath.split("/");

  if (pagePathArr.length !== 2) {
    console.log(ctx.helper.chalk.red("主包页面路径只允许二级"));
    return;
  } else {
    const subPackageDir =
      ctx.pluginConfigModel?.getConfig<PluginOptions>().subPackageDir;
    const finalDir = path.resolve(
      ctx.paths.sourcePath,
      subPackageDir!,
      pagePath
    );
    const pageName = pagePathArr[1];
    PageGenerator(ctx, finalDir, pageName);
  }
};

export const generatorTabBarPage = (ctx: IContext, pagePath: string) => {
  const pagePathArr = pagePath.split("/");

  if (pagePathArr.length !== 1) {
    console.log(ctx.helper.chalk.red("tabbar页面路径只允许一级"));
    return;
  } else {
    const tabbarDir =
      ctx.pluginConfigModel?.getConfig<PluginOptions>().tabbarDir;
    const finalDir = path.resolve(getPagesPath(ctx), tabbarDir!, pagePath);
    const pageName = pagePath;
    PageGenerator(ctx, finalDir, pageName);
  }
};
