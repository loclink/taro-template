import { View, Text } from '@tarojs/components';
import styles from './index.module.scss';

export default function Index() {
  return (
    <View className={styles.warpper}>
      <Text>Hello world!</Text>
    </View>
  );
}
