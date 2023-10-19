import { ViewProps } from '@tarojs/components';
import { NavBarProps } from './nav-bar';
import { FunctionComponent, PropsWithChildren } from 'react';

export interface PageContainerProps extends ViewProps {
  title?: string;
  isScroll?: boolean;
  navBarProps?: NavBarProps & {
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
