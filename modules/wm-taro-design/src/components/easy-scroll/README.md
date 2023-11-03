# EasyScroll 滚动加载

### 介绍

更方便的滚动加载组件，开箱即用，集成了 `InfiniteScroll` 的滚动加载以及 `PullToRefresh` 的下拉刷新功能。

### 引入

```tsx
import { EasyScroll } from 'wm-taro-design'
```

## 代码演示

### 结合瀑布流使用

::: $demo1 :::

### IUseEasyScrollOptions<T> [[详情]](https://codeup.aliyun.com/5f855dfb1858a17210466fd0/wuhang-meimeng-development/wm-taro-design/blob/master/packages/taro-design/types/easy-scroll.d.ts)

| 参数        | 说明             | 类型                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| defaultData | 默认数据         | _&nbsp;&nbsp;T[]<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| params      | 额外传递参数     | _&nbsp;&nbsp;Record<<br/>&nbsp;&nbsp;&nbsp;&nbsp;string,<br/>&nbsp;&nbsp;&nbsp;&nbsp;any<br/>&nbsp;&nbsp;><br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| initRequest | 初始是否发出请求 | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| getData     | 获取数据         | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;data:&nbsp;Record<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;any<br/>&nbsp;&nbsp;&nbsp;&nbsp;>&nbsp;&&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pageNum:&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;Promise<{<br/>&nbsp;&nbsp;&nbsp;&nbsp;data?:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;list?:&nbsp;T[]<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isLastPage?:&nbsp;boolean<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total?:&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;}><br/>&nbsp;&nbsp;dataFormat?(<br/>&nbsp;&nbsp;&nbsp;&nbsp;data:&nbsp;T[]<br/>&nbsp;&nbsp;):&nbsp;any[]<br/>_ |

### EasyScrollInstance [[详情]](https://codeup.aliyun.com/5f855dfb1858a17210466fd0/wuhang-meimeng-development/wm-taro-design/blob/master/packages/taro-design/types/easy-scroll.d.ts)

数据格式化
| 方法 | 说明 | 类型 |
| --- | --- | --- |
| reset | 重置加载状态 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;loadMore?:&nbsp;boolean<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;Promise<null><br/>_ |

### easyScrollProps [[详情]](https://codeup.aliyun.com/5f855dfb1858a17210466fd0/wuhang-meimeng-development/wm-taro-design/blob/master/packages/taro-design/types/easy-scroll.d.ts)

| 参数      | 说明 | 类型                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | 默认值 | 必填   |
| --------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ | ------ |
| useScroll | -    | _&nbsp;&nbsp;<T>(<br/>&nbsp;&nbsp;&nbsp;&nbsp;options:&nbsp;IUseEasyScrollOptions<T><br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;onLoadMore:&nbsp;()&nbsp;=>&nbsp;Promise<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"loading"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"complete"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"error"<br/>&nbsp;&nbsp;&nbsp;&nbsp;><br/>&nbsp;&nbsp;&nbsp;&nbsp;onRefresh:&nbsp;(refreshParams?:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;clearList:&nbsp;boolean<br/>&nbsp;&nbsp;&nbsp;&nbsp;})&nbsp;=>&nbsp;Promise<void><br/>&nbsp;&nbsp;&nbsp;&nbsp;list:&nbsp;T[]<br/>&nbsp;&nbsp;&nbsp;&nbsp;ref:&nbsp;React.MutableRefObject<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;EasyScrollInstance<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;undefined<br/>&nbsp;&nbsp;&nbsp;&nbsp;><br/>&nbsp;&nbsp;}<br/>_ | -      | `true` |

### EasyScrollProps [[详情]](https://codeup.aliyun.com/5f855dfb1858a17210466fd0/wuhang-meimeng-development/wm-taro-design/blob/master/packages/taro-design/types/easy-scroll.d.ts)

| 参数       | 说明     | 类型                                               | 默认值 | 必填   |
| ---------- | -------- | -------------------------------------------------- | ------ | ------ |
| onLoadMore | 加载更多 | _&nbsp;&nbsp;InfiniteScrollProps["loadMore"]<br/>_ | -      | `true` |
| onRefresh  | 刷新     | _&nbsp;&nbsp;()&nbsp;=>&nbsp;Promise<void><br/>_   | -      | `true` |
