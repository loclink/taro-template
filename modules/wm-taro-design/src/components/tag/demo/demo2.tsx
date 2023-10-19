import { View } from '@tarojs/components';
import { Tag } from 'wm-taro-design';

export default function Demo() {
  return (
    <View>
      <Tag plain type='primary'>
        标签
      </Tag>
      <Tag plain type='success'>
        标签
      </Tag>
      <Tag plain type='danger'>
        标签
      </Tag>
      <Tag plain type='warning'>
        标签
      </Tag>
    </View>
  );
}
