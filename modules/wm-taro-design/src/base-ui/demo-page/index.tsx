import { Icon } from '@/components/icon';
import { View } from '@tarojs/components';
import Taro, { getCurrentPages, navigateBack, pageScrollTo, useRouter, useShareAppMessage } from '@tarojs/taro';
import { useEffect } from 'react';
import './index.less';
import { getCurrentInstance } from '@tarojs/runtime';

export default function Page(props) {
  // eslint-disable-next-line react/prop-types
  const { title, className = '', children } = props;

  const { path } = useRouter();
  useEffect(() => {
    if (process.env.TARO_ENV === 'h5') {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    } else {
      pageScrollTo({
        scrollTop: 0
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  useShareAppMessage(() => {
    return {
      title: 'AntM 组件库演示',
      path
    };
  });

  const handleBack = () => {
    Taro.navigateTo({ url: 'pages/dashboard/index' });
    // let _url: any = '';
    // if (window.parent !== window) {
    //   try {
    //     _url = window.parent.location.href;
    //   } catch (e) {
    //     _url = window.document.referrer;
    //   }
    // }
    // window.parent.location.href = `${_url}#/home`;
  };
  return (
    <View className={`demo-page ${className}`}>
      {'h5' === process.env.TARO_ENV && (
        <View className='demo-nav'>
          <Icon name='arrow-left' className='demo-nav__back' onClick={handleBack} />
          <View className='demo-nav__title'>{title}</View>
        </View>
      )}
      {children}
    </View>
  );
}
