import { Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import icons from '@vant/icons';
import { Col, Icon } from 'wm-taro-design';

export default function Demo() {
  const handleCopyName = (name) => {
    Taro.setClipboardData({
      data: name,
      success() {
        Taro.showToast({ title: '复制成功' });
      }
    });
  };
  return (
    <>
      {icons.basic.map((name, i) => (
        <Col
          onClick={() => handleCopyName(name)}
          key={i}
          span='6'
          style={{ paddingTop: '20px', paddingBottom: '20px' }}
        >
          <Icon name={name} size='32px' />
          <Text>{name}</Text>
        </Col>
      ))}
    </>
  );
}
