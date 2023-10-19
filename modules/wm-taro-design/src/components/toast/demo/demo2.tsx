import { View } from '@tarojs/components';
import { Button, Toast } from 'wm-taro-design';

const MyToast = Toast.createOnlyToast();

export default function Demo() {
  const show = () => {
    MyToast.loading({
      message: '正在加载'
    });
  };

  const showLong = () => {
    MyToast.loading({
      loadingType: 'spinner',
      message: '加载中...'
    });
  };

  return (
    <View>
      <Button type='primary' onClick={show}>
        加载提示
      </Button>
      <Button type='primary' onClick={showLong}>
        自定义加载图标
      </Button>
      <MyToast />
    </View>
  );
}
