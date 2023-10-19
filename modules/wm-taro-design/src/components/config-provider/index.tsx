import { View } from '@tarojs/components';
import * as utils from '../wxs/utils';
import * as computed from './wxs';
import { ConfigProviderProps } from 'types/config-provider';

export function ConfigProvider(props: ConfigProviderProps) {
  const { themeVars = {}, children, style, className, ...others } = props;
  return (
    <View
      className={`wm-config-provider ${className || ''}`}
      style={utils.style([computed.mapThemeVarsToCSSVars(themeVars), style])}
      {...others}
    >
      {children}
    </View>
  );
}

export default ConfigProvider;
export type * from 'types/config-provider';
