import { View, Text } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import { AtButton, AtNoticebar } from 'taro-ui';
import 'taro-ui/dist/style/index.scss';
import './index.scss';

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.');
  });

  return (
    <View className='index'>
      <AtNoticebar marquee>这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏</AtNoticebar>
      <AtButton>按钮</AtButton>
      <Text>Hello world!</Text>
    </View>
  );
}
