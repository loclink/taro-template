import React, { memo } from 'react';
import { View } from '@tarojs/components';
import { PageContainer } from 'wm-taro-design';
import styles from './index.module.less';

const Component: React.FC = () => {
  return (
    <PageContainer title='Auth'>
      <View className={styles.authWrapper}>Auth</View>
    </PageContainer>
  );
};

const Auth = memo(Component);
export default Auth;

/**
 * 定义页面配置，需要注意的是，使用 definePageConfig 定义的页面配置对象不能使用变量。
 * 参考: https://docs.taro.zone/docs/page-config#配置项列表
 */
definePageConfig({
  disableScroll: true
});
