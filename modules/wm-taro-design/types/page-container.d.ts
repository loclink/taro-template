import { ViewProps } from '@tarojs/components';
import { NavBarProps } from './nav-bar';
import { FunctionComponent, PropsWithChildren } from 'react';

export interface PageContainerProps extends ViewProps {
  /**
   * @description 页面navbar标题
   */
  title?: string;

  /**
   * @description 是否启用纵向滚动
   * @default true
   */
  isScroll?: boolean;

  /**
   * @description 是否开启底部安全距离
   * @default true
   */
  isSafeArea?: boolean;

  /**
   * @description Navbar组件参数
   */
  navBarProps?: NavBarProps & {
    /**
     * @description 背景色
     */
    backIconColor?: string;
    isTransparent?: boolean;
  };
}

interface pageContainerProps {
  Context: React.Context<any>;
}

/**
 * 更方便的页面容器
 */
declare const PageContainer: FunctionComponent<PropsWithChildren<PageContainerProps>> & pageContainerProps;

export { PageContainer };
