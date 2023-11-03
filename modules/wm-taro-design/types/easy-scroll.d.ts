import { FunctionComponent } from 'react';
import { ViewProps } from '@tarojs/components';
import { InfiniteScrollProps } from 'wm-taro-design';

export interface IUseEasyScrollOptions<T> {
  /**
   * @description 默认数据
   */
  defaultData?: T[];

  /**
   * @description 额外传递参数
   */
  params?: Record<string, any>;

  /**
   * @description 初始是否发出请求
   */
  initRequest?: boolean;

  /**
   * @description 获取数据
   *
   */
  getData: (
    data: Record<string, any> & { pageNum: number }
  ) => Promise<{ data?: { list?: T[]; isLastPage?: boolean; total?: number } }>;

  /**
   * @description 数据格式化
   */
  dataFormat?(data: T[]): any[];
}

export interface EasyScrollInstance {
  /**
   * @description 重置加载状态
   * @param loadMore 是否触发加载方法
   */
  reset: (loadMore?: boolean) => Promise<null>;
}

export interface easyScrollProps {
  useScroll: <T>(options: IUseEasyScrollOptions<T>) => {
    onLoadMore: () => Promise<'loading' | 'complete' | 'error'>;
    onRefresh: (refreshParams?: { clearList: boolean }) => Promise<void>;
    list: T[];
    ref: React.MutableRefObject<EasyScrollInstance | undefined>;
  };
}

export interface EasyScrollProps extends ViewProps {
  /**
   * @description 加载更多
   */
  onLoadMore: InfiniteScrollProps['loadMore'];

  /**
   * @description 刷新
   * @returns
   */
  onRefresh: () => Promise<void>;
}

declare const EasyScroll: React.ForwardRefExoticComponent<
  Omit<React.PropsWithChildren<EasyScrollProps>, 'ref'> & React.RefAttributes<unknown>
> &
  easyScrollProps;

export { EasyScroll };