import { View } from '@tarojs/components';
import * as utils from '../wxs/utils';
import { Icon } from '../icon';
import { Info } from '../info';
import { TabbarItemProps } from 'types/tabbar';
import classNames from 'classnames';
import './index.less';

export function TabbarItem(
  props: TabbarItemProps & {
    index: number;
    active?: number;
    activeColor?: string;
    inactiveColor?: string;
    onChange?: (data?: string | number) => void;
  }
) {
  const {
    icon,
    name,
    iconPrefix = 'van-icon',
    dot,
    info,
    renderIconActive,
    renderIcon,
    index,
    active,
    activeColor,
    inactiveColor,
    onChange,
    children,
    style,
    className,
    onClick,
    ...others
  } = props;

  const _click = function () {
    if (onChange) {
      const _active = name ?? index;
      if (_active !== active) {
        onChange(_active);
      }
    }

    onClick?.(name ?? index);
  };

  return onChange ? (
    <View
      className={classNames(
        utils.bem('tabbar-item', {
          active: active === (name ?? index)
        }),
        'custom-class',
        className
      )}
      style={utils.style([
        {
          color: active === (name ?? index) ? activeColor : inactiveColor
        },
        style
      ])}
      {...others}
      onClick={_click}
    >
      <View className='wm-tabbar-item__icon'>
        {icon ? (
          <Icon size={38} name={icon} classPrefix={iconPrefix} className='wm-tabbar-item__icon__inner'></Icon>
        ) : (
          <>{active === (name ?? index) ? renderIconActive : renderIcon}</>
        )}
        <Info dot={dot} info={info} className='wm-tabbar-item__info'></Info>
      </View>
      <View className='wm-tabbar-item__text'>{children}</View>
    </View>
  ) : (
    <></>
  );
}
export default TabbarItem;
