import { ScrollViewProps, ViewProps } from '@tarojs/components';
import { FunctionComponent, PropsWithChildren } from 'react';
import { NavBarProps } from './nav-bar';

export interface PageContainerProps extends ViewProps {
  /**
   * @description 页面navbar标题
   */
  title?: string;

  /**
   * @description 是否显示返回按钮(在tabbar页面中始终为false)
   * @default true
   */
  isShowBackIcon?: boolean;

  /**
   * @description 是否启用纵向滚动
   * @default true
   */
  isScroll?: boolean;

  /**
   * @description 是否开启底部安全距离(开启后仅在存在安全距离的设备上生效)
   * @default true
   */
  isSafeArea?: boolean;

  /**
   * @description 滚动视图的props
   */
  scrollViewProps?: ScrollViewProps;

  /**
   * @description 自定义底部内容渲染
   */
  renderFooter?: React.ReactNode;
  /**
   * @description Navbar组件参数
   */
  navBarProps?: NavBarProps & {
    backIconColor?: string;
    isTransparent?: boolean;
  };
}

export interface pageContainerProps {
  /**
   * @description 注入页面全局配置的context
   */
  Context: React.Context<any>;

  /**
   * @description NavBar整体高度常量
   */
  NavBarHeight: number;
}

/**
 * 更方便的页面容器
 */
declare const PageContainer: FunctionComponent<PropsWithChildren<PageContainerProps>> & pageContainerProps;

export { PageContainer };
