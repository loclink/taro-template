import home from '@/assets/images/home.png';
import home_active from '@/assets/images/home_active.png';
import profile from '../src/assets/images/profile.png';
import profile_active from '@/assets/images/profile_active.png';
import Router from 'wm-taro-router';

export default {
  homePage: '/pages/tabbar/home/index',
  silentAuthorization: true,
  silentAuthorizationUrl: '/wechat/auth/wx-token',
  loginUrl: '/pages/auth/index',
  apiUrl: 'http://wanghui-shouhou.f.meimob.com',
  router: Router,
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
