# 快速上手

### 背景知识

使用 wm-taro-design 前，请确保你已经学习过[Taro 框架 React 版](https://taro.zone/) 或者 [React](https://reactjs.org/)。

> 结合公司目前的运营情况，`wm-taro-design` 将优先考虑微信小程序开发环境，其次才考虑 H5 或其他小程序环境，H5 项目如果不需要做多端适配，公司将不再推荐使用 `Uniapp` 或 `Taro` 进行开发，未来我也会单独搭建 H5 项目模板以及其配套的组件库供大家使用。

### 支持程度

- Taro 需要使用 3.0+的版本，且需要使用 TypeScript + less 作为开发语言

## 开始使用

> 从 0.0.10 版本开始，组件库将不再以打包形式发布，且无需再单独引入样式文件，组件样式将自动随组件引入。
> 这也就意味着，Taro 的[预编译模式](https://docs.taro.zone/docs/prebundle/#%E5%BC%80%E5%90%AF-prebundle-%E9%85%8D%E7%BD%AE)需要排除 wm-taro-design，否则组件库将被打包为模块联邦，从而导致依赖导入失败。

### 通过 npm/yarn/pnpm 安装

```bash
# 通过 pnpm 安装
pnpm add wm-taro-design

# 通过 yarn 安装
yarn add wm-taro-design

# 通过 npm 安装
npm i wm-taro-design

```

### 预编译排除

```ts
// config/index.ts

export default defineConfig(async (merge) => {
  const baseConfig: UserConfigExport = {

    // ...other Config

    compiler: {
      type: 'webpack5',
      prebundle: {
        // 预编译排除
        exclude: ['wm-taro-design']
      }
    },
});
```
