import { View } from '@tarojs/components';
import { Tag } from 'wm-taro-design';

export default function Demo() {
  return (
    <View>
      <Tag mark type='primary'>
        标签
      </Tag>
      <Tag mark type='success'>
        标签
      </Tag>
      <Tag mark type='danger'>
        标签
      </Tag>
      <Tag mark type='warning'>
        标签
      </Tag>
    </View>
  );
}
