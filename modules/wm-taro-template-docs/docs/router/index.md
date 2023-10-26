---
order: 1
---

# 前言

## 概述

这是一个小巧的 [Taro(小程序)](https://taro-docs.jd.com/taro/docs/README/index.html) 路由库，得益于`monorepo`可将多个包存放至同一仓库且相互之间可依赖的特性，使得这个库能够完美兼容Taro插件带来的代码生成功能的同时还能保证类型变更后类型推导的及时性，真正意义上实现了插件与核心库的完美结合。

## 特性

- 自动生成带参数类型提示的路由方法
- 允许传递任意类型、任意大小的参数数据
- 同步的路由方法调用
- koa 体验一致的路由中间件

## 解决了什么问题？

1. 路由跳转的页面 url 没有类型提示容易输错
2. 路由传参需要手动拼接参数、无法携带任意类型、任意大小的数据
3. 路由方法是异步的，页面通过 `EventChannel` 通信，事件的回调方法可读性差、耦合度高、只能在回调内部处理异常
4. 路由跳转的鉴权等实现起来比较麻烦

## 如何解决

**1. 路由跳转的页面 url 没有类型提示容易输错**

> 不需要使用者手写页面 url，它会在 dev 模式中监听项目 `src/pages`、 `src/pages-sub`、`src/pages/tabbar` 内容变化，自动为使用者生成对应的路由方法并附加到 **Router** 类上

**2. 路由传参需要手动拼接参数、无法携带任意类型、任意大小的数据**

> 允许直接传递一个对象给 `params`，它会把 `params` 展开拼接到 `url` 后面。并且还可以接收一个 `data` 参数，`data` 可以传递任意类型、任意大小的数据。

**3. 路由方法是异步的，使得代码变得低耦合高复用，且避免回调地狱**

> 路由跳转会返回一个 `Promise`，可以用 `async/await` 写出同步代码

**4. 路由跳转的鉴权等实现起来比较麻烦**

> 自己实现路由的鉴权是比较麻烦的事情，而高级路由提供了非常易于理解的路由中间件功能

## 平台与框架支持

#### 框架支持

支持所有 `Taro` 可支持的框架（`React`、`Vue`、`Vue3`、`Nerv`）

#### 小程序支持

理论上支持所有 `Taro` 可支持的小程序平台

#### H5 支持

支持 ✅

#### React Native 支持

暂不支持 ❌