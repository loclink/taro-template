import config from '@/config';
import Request, { takeTokenRequestInterceptor, requestInterceptorHanlder } from 'wm-request/src/index.taro';

const { apiUrl, silentAuthorization, silentAuthorizationUrl, loginUrl, printLog } = config;
const baseUrl = process.env.NODE_ENV === 'development' ? apiUrl.dev : apiUrl.pro;
const instance = Request.create({ baseUrl });

// 请求拦截器
instance.requestInterceptors.use((requestConfig) =>
  takeTokenRequestInterceptor(requestConfig, { silentAuthorization, silentAuthorizationUrl })
);

// 响应拦截器
instance.responseInterceptors.use((res) => {
  return requestInterceptorHanlder(res, {
    log: printLog,
    silentAuthorization,
    loginUrl,
    instance
  });
});

export default instance;
