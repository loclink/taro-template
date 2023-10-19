import { PropsWithChildren } from 'react';
import Taro, { useDidShow, useLaunch } from '@tarojs/taro';
import { ConfigProvider, PageContainer } from 'wm-taro-design';
import { useAtom } from 'jotai';
import { tabbarData, tabbarIndex } from './custom-tab-bar/store';
import { useTabbarMiddleware } from './custom-tab-bar/useTabbarMiddleware';
import config from './config';
import './app.less';

function App({ children }: PropsWithChildren<any>) {
  const [data] = useAtom(tabbarData);
  const [_, setCurrent] = useAtom(tabbarIndex);
  const { registerTabbarMiddleware } = useTabbarMiddleware();

  useDidShow(() => {
    const index = data.findIndex((item) => item.pagePath.includes(Taro.getCurrentInstance().router?.path!));
    if (index !== -1) setCurrent(index);
  });

  useLaunch(() => {
    console.log('App launched.');
    registerTabbarMiddleware();
  });
  // children 是将要会渲染的页面
  return (
    <PageContainer.Context.Provider value={config}>
      <ConfigProvider>{children}</ConfigProvider>
    </PageContainer.Context.Provider>
  );
}

export default App;
