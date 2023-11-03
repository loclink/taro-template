/* eslint-disable */

import { Component } from 'react';
import DemoBlock from '@/base-ui/demo-block/index';
import Demo1 from './demo1';
import Demo2 from './demo2';
import Demo3 from './demo3';
import PageContainer from '@/components/page-container';

export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  state = { active: 0 };
  render() {
    return (
      <PageContainer title='WaterfallFlow 瀑布流' className='pages-waterfall-flow-index'>
        <DemoBlock title='基本案例' padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title='动态修改列数' padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title='##适用场景' padding>
          <Demo3 />
        </DemoBlock>
      </PageContainer>
    );
  }
}
