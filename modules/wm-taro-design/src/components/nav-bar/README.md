# NavBar 导航栏

### 介绍

为页面提供导航功能，常用于页面顶部。

### 引入

在 Taro 文件中引入组件

```js
import { NavBar } from 'wm-taro-design'
```

## 代码演示

### 基础用法

::: $demo1 :::

### 高级用法

::: $demo2 :::

### NavBarProps [[详情]](https://codeup.aliyun.com/5f855dfb1858a17210466fd0/wuhang-meimeng-development/wm-taro-template/tree/master/modules/wm-taro-design/types/nav-bar.d.ts)

| 参数             | 说明                                           | 类型                                                                                                     | 默认值 | 必填    |
| ---------------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------ | ------- |
| title            | 标题                                           | _&nbsp;&nbsp;ReactNode<br/>_                                                                             | -      | `false` |
| fixed            | 是否开启固定定位，开启后将脱离文档流不占据高度 | _&nbsp;&nbsp;boolean<br/>_                                                                               | -      | `false` |
| placeholder      | -                                              | _&nbsp;&nbsp;boolean<br/>_                                                                               | -      | `false` |
| leftText         | -                                              | _&nbsp;&nbsp;ReactNode<br/>_                                                                             | -      | `false` |
| rightText        | -                                              | _&nbsp;&nbsp;ReactNode<br/>_                                                                             | -      | `false` |
| style            | -                                              | _&nbsp;&nbsp;CSSProperties<br/>_                                                                         | -      | `false` |
| leftArrow        | -                                              | _&nbsp;&nbsp;boolean<br/>_                                                                               | -      | `false` |
| border           | -                                              | _&nbsp;&nbsp;boolean<br/>_                                                                               | -      | `false` |
| zIndex           | -                                              | _&nbsp;&nbsp;number<br/>_                                                                                | -      | `false` |
| safeAreaInsetTop | -                                              | _&nbsp;&nbsp;boolean<br/>_                                                                               | -      | `false` |
| renderTitle      | -                                              | _&nbsp;&nbsp;ReactNode<br/>_                                                                             | -      | `false` |
| renderLeft       | -                                              | _&nbsp;&nbsp;ReactNode<br/>_                                                                             | -      | `false` |
| renderRight      | -                                              | _&nbsp;&nbsp;ReactNode<br/>_                                                                             | -      | `false` |
| onClickLeft      | -                                              | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | -      | `false` |
| onClickRight     | -                                              | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式

| 名称                       | 默认值                       |
| -------------------------- | ---------------------------- |
| --nav-bar-height           | ` 92px; // 对MiniNavbar无效` |
| --nav-bar-background-color | ` @white;`                   |
| --nav-bar-arrow-size       | ` 32px; // 对MiniNavbar无效` |
| --nav-bar-icon-color       | ` var(--primary-color);`     |
| --nav-bar-text-color       | ` var(--primary-color);`     |
| --nav-bar-title-font-size  | ` @font-size-lg;`            |
| --nav-bar-title-text-color | ` @text-color;`              |
