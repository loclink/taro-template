/* eslint-disable */
import { View } from '@tarojs/components';
import { Button } from 'wm-taro-design';

export default function Demo() {
  return (
    <View>
      <Button icon='star' type='primary' />
      <Button icon='like' type='primary'>
        按钮
      </Button>
      <Button icon='https://antm-js.gitee.io/resource/antmjs-vantui.jpg' type='info'>
        按钮
      </Button>
    </View>
  );
}
