/* eslint-disable */

import { Component } from 'react';
import { PageContainer } from 'wm-taro-design';
import DemoBlock from '@/base-ui/demo-block';
import Demo1 from './demo1';
import Demo2 from './demo2';
import Demo3 from './demo3';
import Demo4 from './demo4';
import Demo5 from './demo5';

export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  state = { active: 0 };
  render() {
    return (
      <PageContainer title='Tabbar 标签栏'>
        <DemoBlock title='基础用法' padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title='通过名称匹配' padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title='显示徽标' padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title='自定义图标' padding>
          <Demo4 />
        </DemoBlock>

        <DemoBlock title='自定义颜色' padding>
          <Demo5 />
        </DemoBlock>
      </PageContainer>
    );
  }
}
