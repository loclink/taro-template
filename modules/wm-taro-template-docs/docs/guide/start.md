---
order: 2
---

# 快速上手

## 安装依赖

```bash
# 根目录下执行
pnpm install
```

## CLI命令

### 1. DEV 模式

进入Taro项目目录: `packages/taro-template` 执行：

- 微信小程序

```bash
pnpm dev
```

- 其他  
  自行参考 package.json 中的 `scripts` 字段

### 2. 打包构建

进入Taro项目目录: `packages/taro-template` 执行：

- 微信小程序

```bash
pnpm build
```

- 其他  
  自行参考 package.json 中的 `scripts` 字段

:::info{title=注意}
`taro-template` 是默认的项目文件夹名称，开发时请自行修改为项目名称。

若需要划分多个小程序项目，如：**【业务员端、用户端】** ，则基于原项目模板 copy 出一份，文件夹名称修改为项目名称，并修改 `package.json` 中的 `name` 字段。
:::

### 3.创建页面
