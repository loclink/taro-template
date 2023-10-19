/* eslint-disable */
import { View } from '@tarojs/components';
import { Button } from 'wm-taro-design';

export default function Demo() {
  return (
    <View>
      <Button square type='primary'>
        方形按钮
      </Button>
      <Button round type='info'>
        圆形按钮
      </Button>
    </View>
  );
}
