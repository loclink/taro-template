import { PropsWithChildren, useRef, forwardRef, useImperativeHandle } from 'react';

import {
  InfiniteScroll,
  InfiniteScrollInstance,
  PullToRefresh,
  easyScrollProps,
  EasyScrollProps
} from 'wm-taro-design';
import classNames from 'classnames';
import { useScroll } from './hooks';
import './index.less';
import { View } from '@tarojs/components';

export const EasyScroll = forwardRef((props: PropsWithChildren<EasyScrollProps>, ref) => {
  const { renderEmpty = <></> } = props;
  const infiniteScrollInstance = useRef<InfiniteScrollInstance>();

  useImperativeHandle(ref, () => {
    return {
      reset: infiniteScrollInstance.current?.reset
    };
  });

  return (
    <PullToRefresh
      onRefresh={props.onRefresh as any}
      className={classNames('easyScrollWrapper', props.className)}
      touchMaxStart={500}
      touchMinTime={100}
      headHeight={30}
    >
      {props.isEmpty ? renderEmpty : props.children}
      <InfiniteScroll loadMore={props.onLoadMore} ref={infiniteScrollInstance} completeText={!props.isEmpty} />
    </PullToRefresh>
  );
}) as React.ForwardRefExoticComponent<
  Omit<React.PropsWithChildren<EasyScrollProps>, 'ref'> & React.RefAttributes<unknown>
> &
  easyScrollProps;

EasyScroll.useScroll = useScroll;

export default EasyScroll;
