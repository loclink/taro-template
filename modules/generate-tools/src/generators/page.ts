/**
 * 组件生成器
 */
import * as fs from 'fs'
import * as path from 'path'
import { getCssModuleExt, toCamelCase } from '../utils'

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
    <PageContainer title='${toCamelCase(name, true)}'>
      <View className={styles.${toCamelCase(name)}Wrapper}>${toCamelCase(name, true)}</View>
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
`
}

// index.module.less
const style = (name) =>
  `.${toCamelCase(name)}Wrapper{
  // css style 
}
`

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

`
//生产
/**
 *
 * @param componentName 页面
 * @param componentDir   页面目录
 * @param cssExt:文件后缀
 * @param log 日志工具
 */
export function PageGenerator({
  cssExt,
  page,
  appPath,
  chalk,
  cssModule,
  nocss,
}: any) {
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

  const componentDir = path.join(appPath, 'src')
  const dir = path.join(componentDir, page)
  const pathArr = page.split('/')

  const pageName = pathArr[pathArr.length - 1]

  //创建目录
  fs.mkdirSync(dir, { recursive: true })
  // index.tsx
  fs.writeFileSync(
    path.join(dir, `index.tsx`),
    tsx({ name: pageName, cssExt, cssModule })
  )
  console.log(chalk.green('创建成功: ' + path.join(dir, `index.tsx`)))
  // index.less
  if (!nocss) {
    fs.writeFileSync(
      path.join(dir, `index${getCssModuleExt(cssModule)}.less`),
      style(pageName)
    )
    console.log(
      chalk.green(
        '创建成功: ' + path.join(dir, `index${getCssModuleExt(cssModule)}.less`)
      )
    )
  }
  // 页面config
  // fs.writeFileSync(path.join(dir, `index.config.ts`), config());
  // console.log(chalk.green("创建成功: " + path.join(dir, `index.config.ts`)));

  // 创建route配置
  fs.writeFileSync(path.join(dir, `route.config.ts`), route())
  console.log(chalk.green('创建成功: ' + path.join(dir, `route.config.ts`)))
  //返回页面名称
  process.exit(0)
}
