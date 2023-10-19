import { View, Text, RichText, RootPortal } from '@tarojs/components';
import { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import Transition from '../transition/index';
import Overlay from '../overlay/index';
import VanIcon from '../icon/index';
import VanLoading from '../loading/index';
import { isObj } from '../common/validator';
import { on, off, trigger } from './events';
import { createOnlyToast } from './create-only-toast';
import toast from './toast';
import { ToastProps } from 'types/toast';
import './index.less';

const defaultId = 'wm-toast';
const defaultOptions = {
  show: true,
  duration: 2000,
  mask: false,
  forbidClick: false,
  type: 'text',
  position: 'middle',
  message: '',
  loadingType: 'circular',
  selector: '#wm-toast',
  id: defaultId
};

// let queue: any = []
let currentOptions = Object.assign({}, defaultOptions);
let timer: any = null;
function parseOptions(message: any) {
  return isObj(message) ? message : { message };
}

export function Toast(props: ToastProps) {
  const [state, setState] = useState({
    show: false,
    duration: 2000,
    mask: false,
    forbidClick: false,
    type: 'text',
    position: 'middle',
    message: '',
    loadingType: 'circular' as any,
    selector: '#wm-toast'
  });

  /* eslint-disable-next-line */
  const { style, className, children, zIndex, isRootPortal = true, ...others } = props;

  const _id = props.id || defaultId;

  useLayoutEffect(() => {
    setState((state) => {
      return {
        ...state
      };
    });
  }, [props]);

  const noop = function () {};
  const clear = useCallback((toastOptions: any) => {
    setState((state) => {
      return {
        ...state,
        show: false
      };
    });
    toastOptions?.onClose?.();
  }, []);

  const tShowListener = (toastOptions) => {
    const options = Object.assign(Object.assign({}, currentOptions), parseOptions(toastOptions));

    if (options.selector === '#wm-toast' || options.selector.replace('#', '') === _id) {
      toast.clear();
      setState((state) => {
        return {
          ...state,
          ...options
        };
      });

      clearTimeout(timer);
      if (options.duration != null && options.duration > 0) {
        timer = setTimeout(() => {
          trigger('toast_clear', toastOptions);
        }, options.duration);
      }
    }
  };

  const tClearListener = useCallback((toastOptions) => {
    clear(toastOptions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tSetDftOptsListener = useCallback((options: any) => {
    currentOptions = Object.assign(currentOptions, options);
  }, []);

  const tResetDftOptsListener = useCallback(() => {
    currentOptions = Object.assign({}, defaultOptions);
  }, []);

  useEffect(() => {
    on('toast_show', tShowListener);

    on('toast_clear', tClearListener);

    on('toast_setDefaultOptions', tSetDftOptsListener);

    on('toast_resetDefaultOptions', tResetDftOptsListener);

    return () => {
      off('toast_show', tShowListener);
      off('toast_clear', tClearListener);
      off('toast_setDefaultOptions', tSetDftOptsListener);
      off('toast_resetDefaultOptions', tResetDftOptsListener);
    };
    /* eslint-disable-next-line */
  }, []);

  return (
    <RootPortal enable={isRootPortal}>
      {(state.mask || state.forbidClick) && (
        <Overlay
          isRootPortal={false}
          show={state.show}
          zIndex={zIndex}
          style={state.mask ? '' : 'background-color: transparent;'}
        ></Overlay>
      )}
      <Transition show={state.show} style={zIndex ? { zIndex: zIndex } : {}} className='wm-toast__container'>
        <View
          id='wm-toast'
          className={
            'wm-toast wm-toast--' +
            (state.type === 'text' || state.type === 'html' ? 'text' : 'icon') +
            ` wm-toast--${state.position} ${className}`
          }
          style={style}
          onTouchMove={noop}
          {...others}
        >
          {state.type === 'text' ? (
            <Text>{state.message}</Text>
          ) : state.type === 'html' ? (
            <RichText nodes={state.message} />
          ) : (
            <View className='wm-toast__box'>
              {state.type === 'loading' ? (
                <VanLoading color='white' type={state.loadingType} className='wm-toast__loading'></VanLoading>
              ) : (
                <VanIcon className='wm-toast__icon' name={state.type}></VanIcon>
              )}
              {state.message && <Text className='wm-toast__text'>{state.message}</Text>}
            </View>
          )}
          {/*  with icon  */}
          {children}
        </View>
      </Transition>
    </RootPortal>
  );
}

Toast.show = toast;
Toast.loading = toast.loading;
Toast.success = toast.success;
Toast.fail = toast.fail;
Toast.clear = toast.clear;
Toast.setDefaultOptions = toast.setDefaultOptions;
Toast.resetDefaultOptions = toast.resetDefaultOptions;
Toast.createOnlyToast = () => createOnlyToast(Toast);

export default Toast;
