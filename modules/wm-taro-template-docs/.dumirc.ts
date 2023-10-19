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
    },
    prefersColor: { default: 'auto', switch: true },
    nav: [
      {
        title: '开发指南',
        link: '/guide',
      },
    ],
  },
});
