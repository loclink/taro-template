---
order: 2
---

# 开发规范

在正式开始项目开发前，你必须先了解该模板制定的一系列规范，并严格遵守这些规范。

## 目录结构

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


> 待补充

