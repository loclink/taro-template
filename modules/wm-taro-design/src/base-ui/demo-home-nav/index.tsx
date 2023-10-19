/* eslint-disable react/prop-types */
import { View } from '@tarojs/components';
import { getCurrentPages, redirectTo, navigateTo } from '@tarojs/taro';

import { Icon } from '@/components';
import './index.less';

export default function Index(props: any) {
  const { group } = props;

  const onClick = (event, path) => {
    const { url } = event.target.dataset;
    redirectTo({ url: `${url}` });

    // let _url: any = '';
    // if (window.parent !== window) {
    //   try {
    //     _url = window.parent.location.href;
    //   } catch (e) {
    //     _url = window.document.referrer;
    //   }
    // }
    // window.parent.location.href = `${_url}#/${path}`;
  };

  return (
    <View className='demo-home-nav'>
      <View className='demo-home-nav__title'>{group.name || group.title}</View>
      <View className='demo-home-nav__group'>
        {group.items.map((item) => {
          return (
            <View
              key={item.title}
              className='demo-home-nav__block'
              data-url={'/pages/' + item.path + '/index'}
              onClick={(e) => onClick(e, item.path)}
            >
              {item.title}
              <Icon name='arrow' className='demo-home-nav__icon'></Icon>
            </View>
          );
        })}
      </View>
    </View>
  );
}
