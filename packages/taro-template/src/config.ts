import Router from 'wm-taro-router';
import home from '@/assets/images/tabbar/home.png';
import home_active from '@/assets/images/tabbar/home_active.png';
import profile from '../src/assets/images/tabbar/profile.png';
import profile_active from '@/assets/images/tabbar/profile_active.png';

export default {
  homePage: '/pages/tabbar/home/index',
  silentAuthorization: true,
  silentAuthorizationUrl: '/wechat/auth/wx-token',
  loginUrl: '/pages/auth/index',
  apiUrl: {
    dev: 'http://wanghui-shouhou.f.meimob.com',
    pro: 'http://wanghui-shouhou.f.meimob.com'
  },
  router: Router,
  printLog: true,
  tabbar: [
    {
      text: '首页',
      pagePath: '/pages/tabbar/home/index',
      iconPath: home,
      selectedIconPath: home_active
    },
    {
      text: '我的',
      pagePath: '/pages/tabbar/profile/index',
      iconPath: profile,
      selectedIconPath: profile_active
    }
  ]
};
