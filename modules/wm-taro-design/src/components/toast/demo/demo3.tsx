import { View } from '@tarojs/components';
import { Button, Toast } from 'wm-taro-design';

export default function Demo() {
  const show = () => {
    Toast.success({
      message: '成功文案',
      selector: '#vanToast-demo2'
    });
  };

  const showLong = () => {
    Toast.fail({
      message: '失败文案',
      selector: '#vanToast-demo2'
    });
  };

  return (
    <View>
      <Button type='info' onClick={show}>
        成功
      </Button>
      <Button type='danger' onClick={showLong}>
        失败
      </Button>
      <Toast id='vanToast-demo2' />
    </View>
  );
}
