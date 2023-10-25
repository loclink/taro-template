import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'WmTaroTemplate',
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
    ],
  },
});
