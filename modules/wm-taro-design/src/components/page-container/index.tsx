import React, { PropsWithChildren, useContext, useEffect, useState } from 'react';
import { ScrollView, View } from '@tarojs/components';
import { Icon, NavBar } from 'wm-taro-design';
import Taro, { getCurrentPages, navigateBack } from '@tarojs/taro';
import { PageContainerProps } from 'types';
import classNames from 'classnames';
import './index.less';

export const PageContainer = (props: PropsWithChildren<PageContainerProps>) => {
  const { title, isScroll = true, navBarProps, className, isSafeArea = true } = props;
  const [isTab, setIsTab] = useState(false);
  const config = useContext(PageContainer.Context);
  const homePagePath = config.homePage || `/${Taro.getApp()['config'].pages[0]}`;

  useEffect(() => {
    if (config.tabbar) {
      const isTabbarPage = !!config.tabbar.find((item) => item.pagePath.includes(config.router.getPagePath()));
      setIsTab(isTabbarPage);
    }
  }, []);

  // 是否展示左侧返回按钮
  const isLeftArrow = () => {
    const { length } = getCurrentPages();
    return length > 1;
  };

  const handleClickLeft = () => {
    if (config.router) {
      if (isLeftArrow()) {
        config.router.back();
      } else {
        config.router.navigate({ url: homePagePath }, { type: 'reLaunch' });
      }
    } else {
      if (isLeftArrow()) {
        navigateBack();
      } else {
        Taro.reLaunch({ url: homePagePath });
      }
    }
  };

  const handleLeftIconName = () => {
    if (isLeftArrow()) return 'arrow-left';
    else return 'arrow-left';
  };

  return (
    <View className={classNames(['page-container', className])}>
      <NavBar
        style={{ backgroundColor: navBarProps?.isTransparent ? '#00000000' : '#ffffff' }}
        title={title}
        renderLeft={
          isTab ? null : <Icon color={navBarProps?.backIconColor} name={handleLeftIconName()} size={'23px'} />
        }
        onClickLeft={handleClickLeft}
        border={!!navBarProps?.border}
        {...navBarProps}
      />
      <View className='contentWrapper'>
        <ScrollView className='content' scrollY={isScroll}>
          {props.children}
        </ScrollView>
      </View>

      {/* <EasyScroll className="content">{props.children}</EasyScroll> */}
      {isTab && <View className='tabbarSpace' />}
      {isSafeArea && <View className='safeArea' />}
    </View>
  );
};

PageContainer.Context = React.createContext<any>({});

export default PageContainer;
