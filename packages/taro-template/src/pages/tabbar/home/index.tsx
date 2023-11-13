import React, { memo } from 'react';
import { View } from '@tarojs/components';
import styles from './index.module.less';
import { PageContainer } from 'wm-taro-design';
import { Button } from '@nutui/nutui-react-taro';
import './index.less';
const Component: React.FC = () => {
  return (
    <PageContainer title='Home' className={styles.homeWrapper}>
      <Button className={styles.testBtn}>Home</Button>
      <View className={styles.homeWrapper}>Home</View>
    </PageContainer>
  );
};

const Home = memo(Component);
export default Home;

/**
 * 定义页面配置，需要注意的是，使用 definePageConfig 定义的页面配置对象不能使用变量。
 * 参考: https://docs.taro.zone/docs/page-config#配置项列表
 */
definePageConfig({
  disableScroll: true
});
