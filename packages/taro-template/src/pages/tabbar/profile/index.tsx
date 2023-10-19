import React, { memo } from "react";
import { View } from "@tarojs/components";
import { PageContainer } from "wm-taro-design";
import styles from "./index.module.less";

const Component: React.FC = () => {
  return (
    <PageContainer title='Profile'>
      <View className={styles.profileWrapper}>Profile</View>
    </PageContainer>
  );
};

const Profile = memo(Component)
export default Profile;

/**
 * 定义页面配置，需要注意的是，使用 definePageConfig 定义的页面配置对象不能使用变量。
 * 参考: https://docs.taro.zone/docs/page-config#配置项列表
 */
definePageConfig({
  disableScroll: true
});
