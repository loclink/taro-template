import { View } from '@tarojs/components';
import { useState } from 'react';
import { Cell, Picker, PickerEvents, Popup } from 'wm-taro-design';

const columns = [
  {
    text: '宁波'
  },
  {
    text: '温州'
  },
  {
    text: '长沙'
  }
];
export default function Demo() {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState<string>('');
  const handleConfirm = (e: PickerEvents) => {
    setShow(false);
    setValue(e.detail.value.text);
  };
  return (
    <View>
      <Cell title='选择地区' onClick={() => setShow(true)} value={value}></Cell>
      <Popup show={show} onClickOverlay={() => setShow(false)} position='bottom'>
        <Picker columns={columns} onConfirm={handleConfirm} />
      </Popup>
    </View>
  );
}
