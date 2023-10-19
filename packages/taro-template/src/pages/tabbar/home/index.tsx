import React, { memo } from 'react';
import { View } from '@tarojs/components';
import { Button, PageContainer } from 'wm-taro-design';
import styles from './index.module.less';
import Router, { NavigateType } from 'wm-taro-router';

const Component: React.FC = () => {
  const handleJump = () => {
    Router.tabbar.toProfile({ type: NavigateType.switchTab });
  };

  return (
    <PageContainer title='Home'>
      <View className={styles.homeWrapper}>
        <Button type='primary' onClick={handleJump}>
          跳转
        </Button>
      </View>
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
