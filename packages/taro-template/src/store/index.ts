import Taro from '@tarojs/taro';
import { api } from '@/request';
import { atom, useAtom } from 'jotai';

// 用户信息
export const userAtom = atom<{
  nickName: string;
  mobile: string;
  headImg: string;
}>({
  nickName: '',
  mobile: '',
  headImg: ''
});

/**
 * 是否已经登录
 * @description 判断用户是否存在手机号
 */
export const isLoginAtom = atom((get) => !!get(userAtom).mobile);

// 项目信息
export const appInfoAtom = atom({
  name: '美萌软件'
});

/**
 * 全局状态钩子函数
 *
 * @export
 * @return {*}
 */
export default function useGlobalStore() {
  const [user, setUser] = useAtom(userAtom);
  const [appInfo, setAppInfo] = useAtom(appInfoAtom);
  const [isLogin] = useAtom(isLoginAtom);

  /**
   * 获取用户信息
   */
  async function getUserAction() {
    try {
      const { data = {} } = await api['/wechat/web/member/getUserInfo_GET']();
      setUser(data);
      return data;
    } catch (error) {
      Taro.showToast({ icon: 'none', title: '获取用户信息失败' });
    }
  }

  return {
    user,
    setUser,
    appInfo,
    setAppInfo,
    isLogin,
    getUserAction
  };
}
