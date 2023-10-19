import { View, ViewProps } from '@tarojs/components';

import './index.less';

interface Props extends ViewProps {
  padding?: boolean;
  title?: string;
  card?: boolean;
}

export default function index(props: Props) {
  const { padding, title, card } = props;
  return (
    <View className={'custom-class demo-block van-clearfix ' + (padding ? 'demo-block--padding' : '')}>
      {title && <View className='demo-block__title'>{title}</View>}
      {card ? <View className='demo-block__card'>{props.children}</View> : props.children}
    </View>
  );
}
