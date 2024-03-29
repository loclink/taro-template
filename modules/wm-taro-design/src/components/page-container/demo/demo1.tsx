import React from 'react';
import { View } from '@tarojs/components';
import { PageContainer } from 'wm-taro-design';

const Demo: React.FC = () => {
  return (
    <PageContainer
      title='这是一个示例'
      renderFooter={<View style={{ width: '100%', height: '100px', background: 'orange' }}>这是底部的内容</View>}
    >
      <View className='pageWrapper' style={{ height: '100%', width: '100%', backgroundColor: 'yellow' }}>
        这是一段内容
      </View>
    </PageContainer>
  );
};

export default Demo;
