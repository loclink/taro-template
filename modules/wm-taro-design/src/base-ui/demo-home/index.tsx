import { View } from '@tarojs/components';
import React from 'react';
import DemoHomeNav from '../demo-home-nav/index';
import './index.less';

interface Porps {
  list: any[];
}

const DemoHome: React.FC<Porps> = (props) => {
  const { list } = props;
  return (
    <View className='demo-home'>
      <View className='demo-home__title'>
        <View className='demo-home__text'>WmTaroDesign</View>
      </View>
      <View className='demo-home__desc'>武汉美萌Taro-React UI 组件库</View>

      {(list || []).map((group, index) => {
        if (!['开发指南', '有赞Vant-Weapp小程序文档'].includes(group.name)) {
          return (
            <View key={index}>
              <DemoHomeNav group={group}></DemoHomeNav>
            </View>
          );
        } else return '';
      })}
    </View>
  );
};

export default DemoHome;
