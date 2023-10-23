import { useState, useEffect, useCallback } from 'react';
import { pxTransform } from '@tarojs/taro';
import { Button as TaroButton, View } from '@tarojs/components';
import * as utils from '../wxs/utils';
import { Icon } from '../icon/index';
import { Loading } from '../loading/index';
import * as computed from './wxs';
import Toast from '../toast';
import { ButtonProps } from 'types/button';
import classNames from 'classnames';
import './index.less';
import { PREFIX } from '../wxs/bem';

let index = 0;

export function Button(props: ButtonProps) {
  const {
    type = 'default',
    size = 'normal',
    block,
    round,
    plain,
    square,
    loading,
    disabled,
    hairline,
    color,
    loadingSize = pxTransform(40),
    loadingType = 'circular',
    loadingText = '加载中...',
    icon,
    classPrefix = 'van-icon',
    onClick,
    children,
    style,
    className,
    loadingMode = 'normal',
    loadingMask = true,
    ...others
  } = props;

  const [innerLoading, setInnerLoading] = useState<boolean | undefined>(false);
  const [compIndex] = useState<number>(++index);

  const toastId = `${PREFIX}-button-toast_${compIndex}`;

  useEffect(() => {
    setInnerLoading(loading);
  }, [loading]);

  useEffect(() => {
    if (innerLoading && loadingMode === 'toast') {
      Toast.loading({
        selector: `#${toastId}`,
        duration: 60 * 60,
        message: loadingText,
        loadingType: loadingType,
        mask: loadingMask
      });
    } else {
      Toast.clear();
    }
  }, [innerLoading]);

  const _click = useCallback(
    (e) => {
      if (onClick && !loading) {
        const res = onClick(e);
        // @ts-ignore
        if (res?.then && res?.catch) {
          setInnerLoading(true);
          res.finally(() => {
            setInnerLoading(false);
          });
        }
      }
    },
    [loading, onClick]
  );

  return (
    <View
      className={classNames([
        utils.bem('button', [
          type,
          size,
          {
            block,
            round,
            plain,
            square,
            loading: innerLoading,
            disabled,
            hairline,
            unclickable: disabled || innerLoading
          }
        ]),
        { [PREFIX + '-hairline--surround']: hairline },
        className
      ])}
      style={utils.style([
        computed.rootStyle({
          plain,
          color
        }),
        style
      ])}
    >
      <Toast id={toastId} />
      <TaroButton
        className={`${PREFIX}-native-button`}
        disabled={disabled}
        onClick={disabled || innerLoading ? undefined : _click}
        {...others}
      ></TaroButton>
      {innerLoading && loadingMode === 'normal' ? (
        <View style='display: flex'>
          <Loading
            className='loading-class'
            size={loadingSize}
            type={loadingType}
            color={computed.loadingColor({
              type,
              color,
              plain
            })}
          ></Loading>
          {loadingText && <View className={`${PREFIX}-button__loading-text`}>{loadingText}</View>}
        </View>
      ) : (
        <>
          {icon && (
            <Icon
              size='1.2em'
              name={icon}
              classPrefix={classPrefix}
              className={`${PREFIX}-button__icon`}
              style='line-height: inherit;'
            ></Icon>
          )}
          <View className={`${PREFIX}-button__text`}>{children}</View>
        </>
      )}
    </View>
  );
}
