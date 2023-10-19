/* eslint-disable */
import { View } from '@tarojs/components';
import { Button } from 'wm-taro-design';

export default function Demo() {
  return (
    <View>
      <Button disabled type='primary'>
        禁用状态
      </Button>
      <Button disabled type='info'>
        禁用状态
      </Button>
    </View>
  );
}
