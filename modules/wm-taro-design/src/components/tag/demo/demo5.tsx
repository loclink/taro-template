import { View } from '@tarojs/components';
import { Tag } from 'wm-taro-design';

export default function Demo() {
  return (
    <View>
      <Tag color='#f2826a'>标签</Tag>
      <Tag color='#7232dd'>标签</Tag>
      <Tag color='#7232dd' plain>
        标签
      </Tag>
      <Tag color='#ffe1e1' textColor='#ad0000'>
        标签
      </Tag>
    </View>
  );
}
