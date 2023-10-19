import { ViewProps } from '@tarojs/components';
import { FunctionComponent } from 'react';

export interface OverlayProps extends ViewProps {
  isRootPortal?: boolean;
  show?: boolean;
  lockScroll?: boolean;
  zIndex?: number;
  duration?: string | number | { enter: string | number; leave: string | number };
}
declare const Overlay: FunctionComponent<OverlayProps>;

export { Overlay };
