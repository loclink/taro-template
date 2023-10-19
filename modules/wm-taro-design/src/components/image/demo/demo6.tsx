import { View, Text } from '@tarojs/components';
import { Image } from 'wm-taro-design';

export default function Demo() {
  return (
    <View>
      <Image width='100px' height='100px' src='xxxx' renderError={<Text>加载失败</Text>} />
    </View>
  );
}
