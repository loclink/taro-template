import React, { PropsWithChildren, useContext, useEffect, useState } from 'react';
import { ScrollView, View } from '@tarojs/components';
import { Icon, NavBar } from 'wm-taro-design';
import Taro, { getCurrentPages, navigateBack } from '@tarojs/taro';
import { PageContainerProps } from 'types';
import classNames from 'classnames';
import './index.less';
import { getMenuButtonBoundingClientRect, getSystemInfoSync } from '../common/utils';

export const PageContainer = (props: PropsWithChildren<PageContainerProps>) => {
  const {
    title,
    isScroll = true,
    navBarProps,
    className,
    isSafeArea = true,
    isShowBackIcon = true,
    scrollViewProps,
    renderFooter
  } = props;
  const [isTab, setIsTab] = useState(false);
  const config = useContext(PageContainer.Context);
  const homePagePath = `/${Taro.getApp()['config'].pages[0]}`;

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
        config?.router?.navigate?.({ url: homePagePath }, { type: 'reLaunch' });
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

  const handleRenderIcon = () => {
    if (isShowBackIcon && !isTab) {
      return <Icon color={navBarProps?.backIconColor} name={handleLeftIconName()} size='23px' />;
    } else {
      return null;
    }
  };
  return (
    <View className={classNames(['page-container', className])}>
      <NavBar
        style={{ backgroundColor: navBarProps?.isTransparent ? '#00000000' : '#ffffff' }}
        title={title}
        renderLeft={handleRenderIcon()}
        onClickLeft={handleClickLeft}
        border={!!navBarProps?.border}
        {...navBarProps}
      />
      <View className='contentWrapper'>
        <ScrollView className='content' {...scrollViewProps} scrollY={isScroll}>
          {props.children}
        </ScrollView>
      </View>

      {/* <EasyScroll className="content">{props.children}</EasyScroll> */}

      <View className='page-content-footer'>{renderFooter}</View>

      {isTab && <View className='tabbarSpace' />}
      {isSafeArea && <View className='safeArea' />}
    </View>
  );
};
const { statusBarHeight: _statusBarHeight } = getSystemInfoSync();

const menuButtonInfo = getMenuButtonBoundingClientRect();
const statusBarHeight = Number.isNaN(_statusBarHeight) ? 22 : _statusBarHeight;
PageContainer.NavBarHeight = (menuButtonInfo.top - statusBarHeight) * 2 + menuButtonInfo.height + statusBarHeight;

PageContainer.Context = React.createContext<any>({});

export default PageContainer;
