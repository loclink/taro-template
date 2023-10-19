import { View } from '@tarojs/components';
import { Cell } from 'wm-taro-design';

export default function Demo() {
  return (
    <View>
      <Cell title='单元格' value='内容' size='large' />
      <Cell title='单元格' value='内容' size='large' label='描述信息' />
    </View>
  );
}
