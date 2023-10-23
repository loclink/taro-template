import { useCallback, useEffect, useState } from 'react';
import { RootPortal } from '@tarojs/components';
import * as utils from '../wxs/utils';
import Transition from './../transition';
import { OverlayProps } from 'types/overlay';
import { PREFIX } from '../wxs/bem';
import './index.less';

function OverlayInner(props: OverlayProps & { setOuterShow?: any }) {
  const {
    show,
    zIndex,
    style,
    className,
    lockScroll = true,
    duration = 300,
    setOuterShow,
    children,
    ...others
  } = props;
  const _noop = useCallback((event) => {
    event.stopPropagation();
    event.preventDefault();
  }, []);
  return lockScroll ? (
    <Transition
      show={show}
      className={`${PREFIX}-overlay` + `  ${className}`}
      style={utils.style([{ 'z-index': zIndex }, style])}
      duration={duration}
      onTouchMove={_noop}
      onAfterLeave={() => {
        setTimeout(() => {
          setOuterShow(false);
        }, 0);
      }}
      {...others}
    >
      {children}
    </Transition>
  ) : (
    <Transition
      show={show}
      className={`${PREFIX}-overlay` + `  ${className || ''}`}
      style={utils.style([{ 'z-index': zIndex }, style])}
      duration={duration}
      onAfterLeave={() => setOuterShow(false)}
      {...others}
    >
      {children}
    </Transition>
  );
}

export function Overlay(props: OverlayProps) {
  const { show, isRootPortal = true } = props;
  const [innerShow, setInnerShow] = useState(false);

  useEffect(() => {
    if (show) setInnerShow(true);
  }, [show]);

  return (
    <RootPortal enable={isRootPortal}>
      {innerShow ? <OverlayInner setOuterShow={setInnerShow} {...props} /> : <></>}
    </RootPortal>
  );
}

export default Overlay;
