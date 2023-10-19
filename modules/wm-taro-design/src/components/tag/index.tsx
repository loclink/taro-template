import { View } from '@tarojs/components';
import * as utils from '../wxs/utils';
import { Icon } from '../icon';
import * as computed from './wxs';
import { TagProps } from 'types';
import classNames from 'classnames';
import './index.less';

export function Tag(props: TagProps) {
  const {
    type = 'default',
    size,
    mark,
    plain,
    round,
    color,
    textColor,
    closeable,
    children,
    onClose,
    style,
    className,
    ...others
  } = props;

  return (
    <View
      className={classNames(
        utils.bem('tag', [
          type,
          size,
          {
            mark,
            plain,
            round
          }
        ]),
        className
      )}
      style={utils.style([
        computed.rootStyle({
          plain,
          color,
          textColor
        }),
        style
      ])}
      {...others}
    >
      {children}
      {closeable && <Icon name='cross' className='wm-tag__close' onClick={onClose}></Icon>}
    </View>
  );
}
export default Tag;
