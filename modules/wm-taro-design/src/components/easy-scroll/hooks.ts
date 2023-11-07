import { useRef, useState } from 'react';
import { EasyScrollInstance, IUseEasyScrollOptions } from 'types';

enum LoadMoreStatus {
  /**
   * 未加载完全部
   */
  loading = 'loading',
  /**
   * 已加载完全部
   */
  complete = 'complete',
  /**
   * 加载异常
   */
  error = 'error'
}

export const useScroll = function useScroll<T>(options: IUseEasyScrollOptions<T>) {
  const { params, defaultData } = options;
  const [list, setList] = useState(defaultData || []);
  const [_, setTotal] = useState(0);
  const ref = useRef<EasyScrollInstance>();
  const pageNum = useRef(0);

  const getListData = async (num?: number) => {
    if (num !== undefined) {
      pageNum.current = num;
    } else {
      pageNum.current++;
    }

    try {
      const { data = {} } = await options.getData({
        pageNum: pageNum.current,
        pageSize: 10,
        ...params
      });
      let { list: dataList = [], total: totalNum = -1, isLastPage } = data;
      dataList = options.dataFormat ? options.dataFormat(dataList) : dataList;

      if (pageNum.current === 1) {
        setList(dataList);
      } else {
        dataList = list.concat(dataList);
        setList(dataList);
      }
      setTotal(totalNum);

      const noMore = isLastPage !== undefined ? !!isLastPage : totalNum !== -1 ? dataList.length >= totalNum : true;
      if (noMore) {
        return LoadMoreStatus.complete;
      } else {
        return LoadMoreStatus.loading;
      }
    } catch (error) {
      return LoadMoreStatus.error;
    }
  };

  const onLoadMore = async () => {
    return await getListData();
  };

  const onRefresh = async (refreshParams?: { clearList: boolean }) => {
    if (refreshParams?.clearList) setList([]);
    // await ref.current?.reset(true);
    await getListData(1);
  };

  /**
   * 重新加载
   */
  const reload = () => {
    pageNum.current = 0;
    ref.current?.reset(true);
  };

  return {
    onLoadMore,
    onRefresh,
    list,
    reload,
    ref
  };
};
