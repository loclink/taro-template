/* eslint-disable */
import { View } from '@tarojs/components';
import { Button } from 'wm-taro-design';

export default function Demo() {
  return (
    <View>
      <Button type='primary' size='large'>
        大号按钮
      </Button>
      <Button type='primary' size='normal'>
        普通按钮
      </Button>
      <Button type='primary' size='small'>
        小型按钮
      </Button>
      <Button type='primary' size='mini'>
        迷你按钮
      </Button>
    </View>
  );
}
