import { FunctionComponent, PropsWithChildren, ReactNode } from 'react';
import { ViewProps } from '@tarojs/components';
import { TransitionProps } from './mixins/transition';

export interface TransitionPropsCom extends TransitionProps, ViewProps {}

declare const Transition: FunctionComponent<PropsWithChildren<TransitionPropsCom>>;

export { Transition };
