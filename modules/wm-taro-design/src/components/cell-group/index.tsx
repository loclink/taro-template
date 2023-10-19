import { View } from '@tarojs/components';
import * as utils from '../wxs/utils';
import { CellGroupProps } from 'types';
import './index.less';

export function CellGroup(props: CellGroupProps) {
  const { inset, title, border = true, children, style, className, ...others } = props;

  return (
    <>
      {title && (
        <View
          className={utils.bem('cell-group__title', {
            inset
          })}
        >
          {title}
        </View>
      )}
      <View
        className={
          ' ' +
          utils.bem('cell-group', {
            inset
          }) +
          ' ' +
          (border ? 'wm-hairline--top-bottom' : '') +
          ` ${className || ''}`
        }
        style={style}
        {...others}
      >
        {children}
      </View>
    </>
  );
}
export default CellGroup;
