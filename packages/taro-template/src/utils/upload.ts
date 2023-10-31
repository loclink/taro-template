import AliYunTaro from 'wm-aliyun/src/taro';
import { api } from '@/request';
const { upload } = new AliYunTaro({
  getOssToken: () => api['/wechat/api/oss/info_GET']()
});

export { upload };
