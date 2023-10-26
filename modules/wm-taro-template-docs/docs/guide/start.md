---
order: 2
---

# 快速上手

## 项目目录结构

项目开始前你需要先了解每个目录的作用，以及**页面存放路径规则**，方便你更好的开发和维护项目。

<Tree>
  <ul>
    <li>
      modules
      <small>工具库和公共模块文件夹，在项目开发中一般不会修改此文件夹内容</small>
      <ul>
      </ul>
    </li>
    <li>
      packages
      <small>用于存放前端项目包，可存在多个</small>
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
> 你可以在项目根目录下新建一个 swaggerApi.config.private.js文件。该文件不会被git追踪。便于多人开发

```js
module.exports = {
  templatesType: 'taro',
  apifoxOption: {
    projects: [
      {
        name: '',
        // url 来自于 ApiFox
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
