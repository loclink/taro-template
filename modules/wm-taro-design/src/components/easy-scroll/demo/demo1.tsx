import { View } from '@tarojs/components';
import React from 'react';
import { EasyScroll, Image, PageContainer, PullToRefresh, WaterfallFlow } from 'wm-taro-design';

export const mockGoods = (data: {
  pageNum: number;
}): Promise<{
  data: {
    list: any[];
    isLastPage: boolean;
  };
}> => {
  const random = Math.random();
  const initData = [
    {
      image: 'https://img.yzcdn.cn/vant/cat.jpeg',
      title: '中老年羽绒服男冬季爸爸装薄短款白鸭绒中年人男士保暖外套男装 夜空黑 L【建议115斤以内】',
      price: '¥165.00'
    },
    {
      image: 'https://img.yzcdn.cn/vant/cat.jpeg',
      title: 'HLA海澜之家马丁靴男士高帮男靴复古工装鞋',
      price: '¥361.00'
    },
    {
      image: 'https://img.yzcdn.cn/vant/cat.jpeg',
      title: '洁丽雅拖鞋男夏浴室洗澡防滑家居室内EVA大码男士凉拖鞋居家用夏季防臭 灰色 41-42【标准码】',
      price: '¥22.50'
    },
    {
      image: 'https://img.yzcdn.cn/vant/cat.jpeg',
      title:
        '洁丽雅拖鞋男夏浴室洗澡防滑家居室内EVA大码男士凉拖鞋居家用夏季防臭洁丽雅拖鞋男夏浴室洗澡防滑家居室内EVA大码男士凉拖鞋居家用夏季防臭洁丽雅拖鞋男夏浴室洗澡防滑家居室内EVA大码男士凉拖鞋居家用夏季防臭 灰色 41-42【标准码】',
      price: '¥22.50'
    },
    {
      image: 'https://img.yzcdn.cn/vant/cat.jpeg',
      title: '夏季新款男士T恤宽松气质高端百搭时尚短袖体恤潮牌',
      price: '¥212.00'
    }
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          list: [...initData, ...initData],
          isLastPage: random > 0.9
        }
      });
    }, 1400);
  });
};

const Demo: React.FC = () => {
  const easyScrollProps = EasyScroll.useScroll({ getData: mockGoods });
  return (
    <PageContainer title='滚动加载'>
      <View
        style={{
          padding: '0 20px',
          boxSizing: 'border-box'
        }}
      >
        <EasyScroll {...easyScrollProps}>
          <WaterfallFlow
            dataSource={easyScrollProps.list.map((item, index) => ({
              ...item,
              key: `tedt_${index}`
            }))}
            columnNum={2}
            gutter={20}
            renderItem={(item) => {
              return (
                <View>
                  <Image width='100%' height='200rpx' src={item.image} />
                  <View>{item.title}</View>
                </View>
              );
            }}
          />
        </EasyScroll>

        {/* <PullToRefresh onRefresh={async () => {}}>
          asdasd asdasdasdadsasd
          <View>asdasdasd</View>
          <View>asdasdasd</View>
          <View>asdasdasd</View>
          <View>asdasdasd</View>
          <View>asdasdasd</View>
          <View>asdasdasd</View>
        </PullToRefresh> */}
      </View>
    </PageContainer>
  );
};

export default Demo;
