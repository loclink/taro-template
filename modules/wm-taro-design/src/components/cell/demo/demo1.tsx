import { View } from '@tarojs/components';
import { CellGroup, Cell } from 'wm-taro-design';

export default function Demo() {
  return (
    <View>
      <CellGroup>
        <Cell title='单元格' value='内容' />
        <Cell title='单元格' value='内容' label='描述信息' border={false} />
      </CellGroup>
    </View>
  );
}
