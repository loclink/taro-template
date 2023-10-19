import config from '@/config';
import { tabbarIndex } from './store';
import { useAtom } from 'jotai';
import { Middleware, registerMiddleware } from 'wm-taro-router';

export const useTabbarMiddleware = () => {
  const [_, setCurrent] = useAtom(tabbarIndex);
  const registerTabbarMiddleware = () => {
    const middleware: Middleware = async (ctx, next) => {
      const currentIndex = config.tabbar.findIndex((item) => item.pagePath.includes(ctx.route.url));
      if (currentIndex !== -1) setCurrent(currentIndex);
      await next();
    };
    registerMiddleware(middleware);
  };

  return { registerTabbarMiddleware };
};
