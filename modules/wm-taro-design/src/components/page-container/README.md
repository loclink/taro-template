# PageContainer 页面容器

### 介绍

页面容器，用于快速完成页面基本布局，其包含导航栏顶部状态栏距离和底部安全距离，并自动预留中间内容区域高度，无需自行计算，避免重复计算高度。

### 引入

```tsx
import { PageContainer } from 'wm-taro-design';
```

## 代码演示

### 基础用法

::: $demo1 :::

### PageContainerProps [[详情]](https://codeup.aliyun.com/5f855dfb1858a17210466fd0/wuhang-meimeng-development/wm-taro-template/tree/master/modules/wm-taro-design/types/page-container.d.ts)

| 参数        | 说明                 | 类型                                                                                                                                                                            | 默认值 | 必填    |
| ----------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| title       | 页面 navbar 标题     | _&nbsp;&nbsp;string<br/>_                                                                                                                                                       | -      | `false` |
| isScroll    | 是否启用纵向滚动     | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                      | true   | `false` |
| isSafeArea  | 是否开启底部安全距离 | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                      | true   | `false` |
| navBarProps | Navbar 组件参数      | _&nbsp;&nbsp;NavBarProps&nbsp;&&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;backIconColor?:&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;isTransparent?:&nbsp;boolean<br/>&nbsp;&nbsp;}<br/>_ | -      | `false` |
