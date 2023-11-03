export default defineAppConfig({
  window: {
    navigationStyle: 'custom',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  pages: ["pages/tabbar/home/index","pages/auth/index","pages/tabbar/profile/index"],
  tabBar: {"custom":true,"list":[{"text":"home","pagePath":"pages/tabbar/home/index"},{"text":"profile","pagePath":"pages/tabbar/profile/index"}]},
  subPackages: [{"root":"pages-sub/profile","pages":["user-info/index"]}],
  usingComponents: { "parse": "./components/rich-text/parse/index" }
});
