import { CSSProperties, FunctionComponent, ReactNode } from 'react';
import { ITouchEvent, ViewProps } from '@tarojs/components';

export interface NavBarProps extends ViewProps {
  /**
   * @description 标题
   */
  title?: ReactNode;

  /**
   * @description 是否开启固定定位，开启后将脱离文档流不占据高度
   */
  fixed?: boolean;

  /**
   * @description navbar 高度，单位px（不包含状态栏statusBar高度），通常情况下不建议修改
   * @default 根据设备的胶囊高度和状态栏高度计算动态计算值
   */
  height?: number;
  placeholder?: boolean;
  leftText?: ReactNode;
  rightText?: ReactNode;
  style?: CSSProperties;
  leftArrow?: boolean;
  border?: boolean;
  zIndex?: number;
  safeAreaInsetTop?: boolean;
  renderTitle?: ReactNode;
  renderLeft?: ReactNode;
  renderRight?: ReactNode;
  onClickLeft?: (e: ITouchEvent) => void;
  onClickRight?: (e: ITouchEvent) => void;
}

declare const NavBar: FunctionComponent<NavBarProps>;

export { NavBar };
