import { View } from '@tarojs/components';
import { Button, Toast } from 'wm-taro-design';

const MyToast = Toast.createOnlyToast();
export default function Demo() {
  const show = () => {
    MyToast.show('我是提示文案');
  };

  const showLong = () => {
    MyToast.show('我是提示文案, 超过了十五就会换行额～～～');
  };

  return (
    <View>
      <Button type='primary' onClick={show}>
        文字提示
      </Button>
      <Button type='primary' onClick={showLong}>
        长文字提示
      </Button>
      <MyToast />
    </View>
  );
}
