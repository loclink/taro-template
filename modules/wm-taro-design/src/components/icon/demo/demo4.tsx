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
      {icons.filled.map((name, i) => (
        <Col
          key={i}
          span='6'
          onClick={() => handleCopyName(name)}
          style={{ paddingTop: '20px', paddingBottom: '20px', height: '100px' }}
        >
          <Icon name={name} size='32px' />
          <Text style={{ textAlign: 'center' }}>{name}</Text>
        </Col>
      ))}
    </>
  );
}
