/* eslint-disable */

import { Component } from 'react';
import DemoBlock from '@/base-ui/demo-block/index';
import PageContainer from '@/components/page-container';
import Demo1 from './demo1';
import Demo2 from './demo2';
import Demo3 from './demo3';
import Demo4 from './demo4';
import Demo5 from './demo5';
import Demo6 from './demo6';
import Demo7 from './demo7';
import { View } from '@tarojs/components';

export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  state = { active: 0 };
  render() {
    console.log(PageContainer.NavBarHeight);
    return (
      <PageContainer title='Picker 选择器' className='pages-picker-index'>
        <DemoBlock title='基础用法' padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title='默认选中项' padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title='展示顶部栏' padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title='多列联动' padding>
          <Demo4 />
        </DemoBlock>

        <DemoBlock title='禁用选项' padding>
          <Demo5 />
        </DemoBlock>

        <DemoBlock title='加载状态' padding>
          <Demo6 />
        </DemoBlock>

        <DemoBlock title='结合popup使用' padding>
          <Demo7 />
        </DemoBlock>

        <View style={{ height: '50px', width: '100%' }} />
      </PageContainer>
    );
  }
}
