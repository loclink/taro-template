export default defineAppConfig({
  pages: [
    'pages/dashboard/index',
    'pages/button/index',
    'pages/config-provider/index',
    'pages/icon/index',
    'pages/nav-bar/index',
    'pages/page-container/index',
    'pages/loading/index',
    'pages/toast/index',
    'pages/tabbar/index',
    'pages/image/index',
    'pages/cell/index',
    'pages/tag/index',
    'pages/overlay/index'
  ],
  navigationStyle: 'custom',
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
});
