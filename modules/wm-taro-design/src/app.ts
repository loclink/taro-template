import { PropsWithChildren, useEffect } from 'react';
import Taro, { useLaunch, usePageNotFound } from '@tarojs/taro';
import './app.less';

function App({ children }: PropsWithChildren<any>) {
  usePageNotFound(() => {
    Taro.navigateTo({
      url: '/pages/dashboard/index'
    });
  });

  useEffect(() => {
    // 解决文档展示时图片被拖拽
    if (process.env.TARO_ENV === 'h5') {
      setTimeout(() => {
        const imgs = document.getElementsByTagName('img') || [];
        for (let i = 0; i < imgs.length; i++) {
          const img = imgs[i];
          img?.addEventListener('mousedown', function (e) {
            e.preventDefault();
          });
        }
      }, 2000);
    }
  }, [children]);

  useLaunch(() => {
    console.log('App launched.');
  });

  // children 是将要会渲染的页面
  return children;
}

export default App;
