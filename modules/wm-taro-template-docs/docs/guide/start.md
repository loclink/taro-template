---
order: 3
---

# 快速上手

## 获取代码

### 一、使用git工具clone模板代码

请先确保拥有前端代码组的开发者权限，并可以访问该代码仓库：  
https://codeup.aliyun.com/5f855dfb1858a17210466fd0/wuhang-meimeng-development/wm-taro-template.git

之后使用git工具通过 https 或 ssh 的方式将仓库代码拉取到本地

#### 仓库分支说明：

- next：先行版（该版本包含目前最新特性，但相对不稳定）
- master：稳定版 （该版本经过一系列测试，属于相对稳定版本）
- demo-\*\* : 示例项目 （所有以demo开头的分支均为完整项目的示例代码，你可以随时查阅这些代码，了解与学习它们的各项业务处理方式与编码习惯）

:::info{title=注意}
在通常情况下，你只需要使用 master 分支即可。
:::

### 二、使用CLI工具创建模板项目

> 待补充

## 安装依赖

```bash
# 在项目根目录下执行
pnpm install
```

## CLI命令

### 1. DEV 模式

进入Taro项目目录: `packages/taro-template` 执行：

- 微信小程序

  ```bash
  pnpm dev
  ```

  开发微信小程序时你可以像编译H5一样，在编译后自动打开微信小程序模拟器，通过命令：

  ```bash
  pnpm dev --open # --open选项会自动帮您打开微信开发者工具
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

- 创建主包页面 (该命令将会在 `src/pages` 文件夹下创建一个页面) ：

```bash
# 项目根目录下执行命令，生成 src/pages/auth 页面
pnpm gp auth

```

:::info{title=注意}
主包页面除 tabbar 之外均为一级文件夹结构
:::

- 创建tabbar页面

```bash
# 项目根目录下执行命令，生成 src/pages/tabbar/home 页面
pnpm gp tabbar/home
```

:::info{title=注意}
tabbar 页面只允许为二级文件夹结构
:::

- 创建分包页面

```bash
# 项目根目录下执行命令，生成 src/pages-sub/profile/user-info 页面
pnpm gs profile/user-info
```

:::info{title=注意}
分包页面只允许为二级文件夹结构
:::

### 4. 根据 swagger json 生成api代码文件

请在项目根目录下的swaggerApi.config.js中配置swagger json的地址，并执行命令：

- 配置url：

> swagger api接口生成配置文件  
> 详细配置请查看 modules/swagger-api-templates/config.js  
> 这里的配置文件会与默认配置进行合并  
> 你可以在项目根目录下新建一个 swaggerApi.config.private.js文件。该文件不会被git跟踪。便于多人协同开发

```js
module.exports = {
  templatesType: 'taro',
  apifoxOption: {
    projects: [
      {
        name: '',
        // url 来自于 ApiFox 导出
        url: 'http://127.0.0.1:4523/export/openapi?projectId=3127145&version=3.0',
      },
    ],
  },
};
```

- 配置完成后在项目中执行：

```bash
pnpm api
```

> 待补充
