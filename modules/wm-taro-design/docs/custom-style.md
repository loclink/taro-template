# 样式覆盖

### 样式类覆盖 [推荐]

得益于 Taro3 的实现，我们无需再关注小程序的样式隔离问题，所以我们可以常规使用样式覆盖

例如：我们的页面中使用了下面这个组件，父组件类名为：`wrapper`

```jsx
const Demo = () => {
  return (
    <View className="wrapper">
      <Button type="primary">主要按钮</Button>
    </View>
  )
}
```

那么我们只需要在组件文件夹中的 `index.less` **（非 CSS Module）** 定义以下样式

```css
/* index.less */
.wrapper {
  .wm-button--primary {
    font-size: 20px;
    background-color: pink;
  }
}
```

其中：`wm-button--primary` ，是我们通过开发者工具的元素选择器可以找到的类名，也就是这个组件的默认样式类名。

使用这个方式你就可以在 Taro 项目中完全自定义这个组件库中包含的所有组件样式，真正意义上实现了百分百样式可定制化。这也契合了我们公司对 ui 还原度的要求。

### 使用 CSS 变量

wm-taro-design 为部分 CSS 属性开放了基于 CSS 属性的定制方案。

相较于 样式类覆盖，这种方案支持在页面或应用级别对多个组件的样式做批量修改以进行主题样式的定制。

当然，用它来修改单个组件的部分样式也是绰绰有余的。具体的使用方法请查阅[定制主题](#/theme)
