export default defineAppConfig({
  window: {
    navigationStyle: 'custom',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  pages: ["pages/tabbar/home/index", "pages/auth/index", "pages/tabbar/profile/index"],
  subPackages: [{ "root": "pages-sub/profile", "pages": ["user-info/index"] }],
  usingComponents: { "parse": "./components/rich-text/parse/index" }
});
