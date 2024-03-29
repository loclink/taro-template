import React from 'react';
import { Text, View } from '@tarojs/components';
import { Icon, Tabbar, TabbarItem } from 'wm-taro-design';
import Router, { NavigateType } from 'wm-taro-router';
import useTabbar from './store';
import './index.less';

const CustomTabbar: React.FC = () => {
  const { current, data } = useTabbar();
  const handleClickTabbar = (url) => {
    Router.navigate({ url }, { type: NavigateType.switchTab });
  };

  return (
    <View className='customTabbar'>
      <Tabbar active={current}>
        {data.map((value, index) => (
          <TabbarItem className='tab-item' key={index} onClick={() => handleClickTabbar(value.pagePath)}>
            <Icon
              className='tab-item-icon'
              name={value.iconPath}
              style={{
                width: '48rpx',
                height: '48rpx',
                visibility: current === index ? 'hidden' : 'initial',
                position: current === index ? 'absolute' : 'relative'
              }}
            />
            <Icon
              className='tab-item-icon'
              name={value.selectedIconPath}
              style={{
                width: '48rpx',
                height: '48rpx',
                visibility: current === index ? 'initial' : 'hidden',
                position: current === index ? 'relative' : 'absolute'
              }}
            />
            <Text className='tab-item-text'>{value.text}</Text>
          </TabbarItem>
        ))}
      </Tabbar>
    </View>
  );
};

export default CustomTabbar;
