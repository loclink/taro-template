import { View } from '@tarojs/components';
import { Cell } from 'wm-taro-design';

export default function Demo() {
  return (
    <View>
      <Cell center title='单元格' value='内容' label='描述信息' />
    </View>
  );
}
