"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageGenerator = void 0;
/**
 * 组件生成器
 */
const fs = require("fs");
const path = require("path");
const utils_1 = require("../utils");
/**
 *
 * @param group 页面分组
 * @param name  页面名称
 */
const tsx = ({ name, cssExt, cssModule }) => {
    return `import React, { memo } from "react";
import { View } from "@tarojs/components";
import { PageContainer } from "wm-taro-design";
import styles from "./index.module.less";

const Component: React.FC = () => {
  return (
    <PageContainer title='${(0, utils_1.toCamelCase)(name, true)}'>
      <View className={styles.${(0, utils_1.toCamelCase)(name)}Wrapper}>${(0, utils_1.toCamelCase)(name, true)}</View>
    </PageContainer>
  );
};

const ${(0, utils_1.toCamelCase)(name, true)} = memo(Component)
export default ${(0, utils_1.toCamelCase)(name, true)};

/**
 * 定义页面配置，需要注意的是，使用 definePageConfig 定义的页面配置对象不能使用变量。
 * 参考: https://docs.taro.zone/docs/page-config#配置项列表
 */
definePageConfig({
  disableScroll: true
});
`;
};
// index.module.less
const style = (name) => `.${(0, utils_1.toCamelCase)(name)}Wrapper{
  // css style 
}
`;
// const config = () => `export default definePageConfig({
//   disableScroll: true
// });
// `
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
function PageGenerator({ cssExt, page, appPath, chalk, cssModule, nocss, }) {
    //判断页面情况
    // const pages = page.split("/");
    // if (pages.length !== 1 && pages.length !== 2) {
    //   throw "页面参数必须是  index或者 index/index";
    // }
    // let pageGroup = "";
    // let pageName = "";
    // if (pages.length === 1) {
    //   pageGroup = pages[0];
    //   pageName = pages[0];
    // }
    // if (pages.length === 2) {
    //   pageGroup = pages[0];
    //   pageName = pages[1];
    // }
    const componentDir = path.join(appPath, 'src');
    const dir = path.join(componentDir, page);
    const pathArr = page.split('/');
    const pageName = pathArr[pathArr.length - 1];
    //创建目录
    fs.mkdirSync(dir, { recursive: true });
    // index.tsx
    fs.writeFileSync(path.join(dir, `index.tsx`), tsx({ name: pageName, cssExt, cssModule }));
    console.log(chalk.green('创建成功: ' + path.join(dir, `index.tsx`)));
    // index.less
    if (!nocss) {
        fs.writeFileSync(path.join(dir, `index${(0, utils_1.getCssModuleExt)(cssModule)}.less`), style(pageName));
        console.log(chalk.green('创建成功: ' + path.join(dir, `index${(0, utils_1.getCssModuleExt)(cssModule)}.less`)));
    }
    // 页面config
    // fs.writeFileSync(path.join(dir, `index.config.ts`), config());
    // console.log(chalk.green("创建成功: " + path.join(dir, `index.config.ts`)));
    // 创建route配置
    fs.writeFileSync(path.join(dir, `route.config.ts`), route());
    console.log(chalk.green('创建成功: ' + path.join(dir, `route.config.ts`)));
    //返回页面名称
    process.exit(0);
}
exports.PageGenerator = PageGenerator;
//# sourceMappingURL=page.js.map