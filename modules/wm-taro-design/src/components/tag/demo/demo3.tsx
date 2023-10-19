import { View } from '@tarojs/components';
import { Tag } from 'wm-taro-design';

export default function Demo() {
  return (
    <View>
      <Tag round type='primary'>
        标签
      </Tag>
      <Tag round type='success'>
        标签
      </Tag>
      <Tag round type='danger'>
        标签
      </Tag>
      <Tag round type='warning'>
        标签
      </Tag>
    </View>
  );
}
