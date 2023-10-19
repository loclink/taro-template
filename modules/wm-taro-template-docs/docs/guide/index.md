---
order: 1
---

# 前言

## 为什么使用开发模板

开发模板是用来帮助开发者快速搭建一个项目，开发者不需要关注公共的或者底层的业务逻辑，只需要关注业务逻辑；统一开发规范，减少开发维护成本，从而提高开发效率。

## 为此我做了什么

- 搭建基于 Taro 3.6.17 + React + Typescript + less 的基本架构
- 搭建 [WmTaroDesign](http://wm-taro-design.develop.meimob.com/#/home) 基础组件库
- 搭建集成于 Taro 的工具链，以及更方便更灵活的 Taro 路由工具库
- 搭建了公司常用的工具库: [wm-kit](http://frontdoc.develop.meimob.com/)
- 开发了专为公司业务定制的通用高级组件

## 开始前需要准备什么

- nodejs 版本为 16+，确保本地全局安装了 pnpm
- 你需要了解和学习 React 框架的开发方式，以及函数式组件的基本用法，理解函数式编程。
- 你需要了解微信小程序特有的钩子函数，及常用api。
- 会阅读 Taro 官方文档，了解 Taro 框架的特性。
- 了解 less 基本语法。
- 了解 TypeScript 语法。
- 了解 jotai 状态管理库的基本用法，以及其常用api。
- 本项目使用 monorepo 结构管理项目，所以你最好还需要了解 monorepo 结构的项目开发方式，以及 pnpm 包管理工具基本使用方法。

## 解决了哪些问题

1. 组件库统一化，提供更友好的组件使用文档，以及更友好的组件使用体验，百分百可覆盖样式的方案。
2. 规范统一，项目目录结构以更加直观更加方便维护的规范约束于每个开发者，使得项目变得更容易扩展和维护。
3. 更加方便的 Taro 路由工具库，极致丝滑的路由开发体验。
4. 更加方便的 Taro 工具链，一键生成页面级组件，及相关配置，自动为项目注册页面路由。
5. 自定义 tabbar，提供完全可自定义样式的底部 tabbar。

## 项目目录结构

项目开始前你需要先了解每个目录的作用，方便你更好的开发和维护项目。

<Tree>
  <ul>
    <li>
      modules
      <small>工具库和公共模块文件夹</small>
      <ul>
      </ul>
    </li>
    <li>
      packages
      <small>用于存放前端项目包</small>
      <ul>
        <li>
          taro-template
          <small>Taro项目模板源码包</small>
          <ul>
            <li>
              src
              <small>项目核心业务存放于此文件夹</small>
              <ul>
                <li>
                  assets
                  <small>静态资源文件夹，用于存放图片或其他静态资源</small>
                </li>
                 <li>
                  components
                  <small>用于存放公共组件</small>
                </li>
                 <li>
                  custom-tab-bar
                  <small>自定义tabbar，一般情况下不需要更改和变动</small>
                </li>
                <li>
                  pages
                  <small>主包页面存放于此，除tabbar文件夹以外，其余页面必须都使用一级目录路径</small>
                  <ul>
                    <li>
                      tabbar
                      <small>用于存放tabbar页面，如：pages/tabbar/home/index.tsx 其余页面则在pages下以一级目录形式创建，如：pages/auth/index.tsx </small>
                    </li>
                  </ul>
                </li>
                <li>
                  pages-sub
                  <small>分包页面存放于此，所有分包页面都以二级目录存放，如：pages-sub/home/goods-list/index.tsx</small>
                </li>
                <li>
                  request
                  <small>网络请求代码存放于此文件夹，如swagger-ui工具自动生成的代码将存放于此，以及拦截器代码也将存放于此</small>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      .editorconfig
      <small>代码内容规范配置文件</small>
    </li>
    <li>
      package.json
      <small>项目描述</small>
    </li>
    <li>pnpm-workspace.yaml</li>

  </ul>
</Tree>
