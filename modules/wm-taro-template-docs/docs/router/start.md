---
order: 2
---

# 快速开始

高级路由默认已集成至 `wm-taro-template` 你无需额外执行任何安装命令，即可体验高级路由带来的完整功能其中包括：

## 插件服务：

在 dev 模式中，插件将自动监听项目下 `src/pages` 与 `src/pages-sub` 和 `src/pages/tabbar` 这三个文件夹的变动，并自动生成对应的路由方法，路由跳转方法名字以 **to** 开头。

## 核心库：

你可以在任何Taro组件文件中通过 ESM 导入方式来使用核心库的完整内容：

```jsx
import React, { memo } from 'react';
import { View } from '@tarojs/components';
import { Button, PageContainer } from 'wm-taro-design';
import styles from './index.module.less';
import Router from 'wm-taro-router';
import RichText from '@/components/rich-text';

const Component: React.FC = () => {
  const handleJump = () => {
    Router.profile.toUser_Info();
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

```
