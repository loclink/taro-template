import { View } from '@tarojs/components';
import { Tag } from 'wm-taro-design';

export default function Demo() {
  return (
    <View>
      <Tag type='danger'>标签</Tag>
      <Tag type='danger' size='medium'>
        标签
      </Tag>
      <Tag type='danger' size='large'>
        标签
      </Tag>
    </View>
  );
}
