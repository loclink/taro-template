import { View } from '@tarojs/components';
import classNames from 'classnames';
import * as utils from '../wxs/utils';
import * as computed from './wxs';
import { ColProps } from 'types/col';
import './index.less';

export function Col(props: ColProps): JSX.Element {
  const { span, offset, gutter = 14, children, className, style, ...others } = props;
  return (
    <View
      className={classNames(utils.bem('col', [span]), offset ? 'van-col--offset-' + offset : '', className)}
      style={utils.style([
        computed.rootStyle({
          gutter
        }),
        style
      ])}
      {...others}
    >
      {children}
    </View>
  );
}
export default Col;
