---
order: 3
---

# 路由跳转

## 通过方法跳转

如果 `src/pages` 目录下存在 `auth` 文件夹，则会自动根据名称生成 `toAuth` 方法，之后你就可以这样跳转至该页面：

```ts
import Router, { NavigateType } from 'wm-taro-router';

Router.toAuth(); // 不带参跳转
Router.toAuth({ params: { username: 'router' } }); // 带参跳转
Router.toAuth({ type: NavigateType.redirectTo }); // 关闭当前页面，跳转到 Auth 页面
```

## 通过路径跳转

除此之外你还可以手动编写路径通过 `Router` 类下的 `navigate` 静态方法来跳转：

```typescript
import Router, { NavigateType } from 'wm-taro-router';

// 不带参跳转
Router.navigate({ url: '/pages/auth/index' });
// 带参跳转
Router.navigate(
  { url: '/pages/auth/index' },
  { params: { username: 'loclink' } },
);

// 关闭当前页面，跳转到 Auth 页面
Router.navigate(
  { url: '/pages/auth/index' },
  { type: NavigateType.redirectTo },
);
```

## 导航类型 NavigateType

以下是支持的路由跳转类型方式

| 字段       | 描述                                                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------- |
| navigateTo | 保留当前页面，跳转到应用内的某个页面。但是不能跳到 `tabbar` 页面。使用 `Router.back` 可以返回到原页面。小程序中页面栈最多十层。 |
| redirectTo | 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 `tabbar` 页面。                                                          |
| reLaunch   | 关闭所有页面，打开到应用内的某个页面                                                                                            |
| switchTab  | 跳转到 `tabBar` 页面，并关闭其他所有非 `tabBar` 页面                                                                            |

## 页面返回

`wm-taro-router` 提供了 **Router.back** 方法以供页面返回

该方法可以返回数据到前一个页面，也可抛出异常到前一个页面

```typescript
Router.back(); // 返回上一个页面，此时上一个页面拿到的是 null
Router.back({ id: 1, name: '深圳' }); // 返回上一个页面并返回城市数据
Router.back(new Error('用户取消选择')); // 返回上一个页面并抛出异常
```

而在上一个页面获取返回的数据只需要 `await` 即可

```typescript
try {
  const result = await Router.navigate({ url: '/pages/sel-city/index' });
  console.log('选择城市：', result);
} catch (err) {
  console.log(err.message);
}
```

> 待补充
