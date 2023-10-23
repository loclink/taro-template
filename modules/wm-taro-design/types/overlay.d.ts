import { ViewProps } from '@tarojs/components';
import { FunctionComponent } from 'react';

export interface OverlayProps extends ViewProps {
  /**
   * @description	是否挂载到根元素下
   */
  isRootPortal?: boolean;

  /**
   * @description 控制是否显示
   */
  show?: boolean;
  lockScroll?: boolean;
  zIndex?: number;
  duration?: string | number | { enter: string | number; leave: string | number };
}
declare const Overlay: FunctionComponent<OverlayProps>;

export { Overlay };
