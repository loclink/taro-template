import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'WmTaroTemplate',
  resolve: {
    codeBlockMode: 'passive',
  },

  themeConfig: {
    name: 'WmTaro',
    lastUpdated: true,
    logo: false,
    footer: false,
    showLineNum: true,
    nprogress: true,
    sidebar: {
      '/guide/': [],
      '/configure/': [],
      '/router/': [],
      '/changelog/': [],
    },
    prefersColor: { default: 'auto', switch: true },
    nav: [
      {
        title: '开发指南',
        link: '/guide',
      },
      {
        title: '配置项',
        link: '/configure',
      },
      {
        title: '高级路由',
        link: '/router',
      },
      {
        title: '集成模块',
        children: [
          {
            title: '工具库 wm-kit',
            link: 'http://frontdoc.develop.meimob.com/',
          },
          {
            title: '组件库 wm-taro-design',
            link: 'http://wm-taro-design.develop.meimob.com/',
          },
        ],
      },
      {
        title: '更新日志',
        link: '/changelog',
      },
    ],
  },
});
