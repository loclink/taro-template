import { View } from '@tarojs/components';
import { CellGroup, Cell } from 'wm-taro-design';

export default function Demo() {
  return (
    <View>
      <CellGroup title='分组1'>
        <Cell title='单元格' value='内容' />
      </CellGroup>
      <CellGroup title='分组2'>
        <Cell title='单元格' value='内容' />
      </CellGroup>
    </View>
  );
}
