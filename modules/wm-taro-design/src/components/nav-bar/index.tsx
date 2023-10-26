import { CSSProperties, useMemo } from 'react';
import { View } from '@tarojs/components';
import classNames from 'classnames';
import { getMenuButtonBoundingClientRect, getSystemInfoSync } from '../common/utils';
import * as utils from '../wxs/utils';
import { Icon } from '../icon';
import { NavBarProps } from 'types';
import './index.less';
import { PREFIX } from '../wxs/bem';

export function NavBar(props: NavBarProps) {
  const {
    fixed,
    placeholder,
    border = true,
    zIndex,
    safeAreaInsetTop = true,
    leftArrow,
    leftText,
    title,
    rightText,
    renderTitle,
    renderLeft,
    renderRight,
    onClickLeft,
    onClickRight,
    style,
    className,
    height,
    ...others
  } = props;

  const { statusBarHeight: _statusBarHeight } = getSystemInfoSync();
  const menuButtonInfo = getMenuButtonBoundingClientRect();

  const statusBarHeight = useMemo(() => {
    if (Number.isNaN(_statusBarHeight)) return 22;
    return _statusBarHeight;
  }, [_statusBarHeight]);

  const navBarHeight = (menuButtonInfo.top - statusBarHeight) * 2 + menuButtonInfo.height;

  const getNavBarStyle = useMemo<CSSProperties>(() => {
    return {
      zIndex,
      paddingTop: safeAreaInsetTop ? statusBarHeight + 'px' : 0,
      ...style,
      height: `${height || navBarHeight}px`
    };
  }, [zIndex, statusBarHeight, safeAreaInsetTop, style]);

  return (
    <>
      {fixed && placeholder && <View style={getNavBarStyle}></View>}
      <View
        className={classNames([
          utils.bem('nav-bar', {
            fixed
          }),
          { [`${PREFIX}-hairline--bottom`]: border },
          className
        ])}
        style={getNavBarStyle}
        {...others}
      >
        <View className={`${PREFIX}-nav-bar__content`}>
          <View className='wm-nav-bar__left' onClick={onClickLeft}>
            {leftArrow || leftText ? (
              <>
                {leftArrow && <Icon size={64} name='arrow-left' className='wm-nav-bar__arrow'></Icon>}
                {leftText && (
                  <View className='wm-nav-bar__text' hoverClass='wm-nav-bar__text--hover' hoverStayTime={70}>
                    {leftText}
                  </View>
                )}
              </>
            ) : (
              renderLeft
            )}
          </View>
          <View className='wm-nav-bar__title wm-nav-bar__title-h5  title-class wm-ellipsis'>
            {title ? <>{title}</> : renderTitle}
          </View>
          <View className='wm-nav-bar__right' onClick={onClickRight}>
            {rightText ? (
              <View className='wm-nav-bar__text' hoverClass='wm-nav-bar__text--hover' hoverStayTime={70}>
                {rightText}
              </View>
            ) : (
              renderRight
            )}
          </View>
        </View>
      </View>
    </>
  );
}

export default NavBar;
