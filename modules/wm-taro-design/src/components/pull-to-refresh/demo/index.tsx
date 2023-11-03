/* eslint-disable */

import { Component } from 'react';
import DemoBlock from '@/base-ui/demo-block/index';
import Demo1 from './demo1';
import PageContainer from '@/components/page-container';

export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  state = { active: 0 };
  render() {
    return (
      <PageContainer title='PullToRefresh 下拉刷新' className='pages-pull-to-refresh-index'>
        <DemoBlock title='基本使用' padding>
          <Demo1 />
        </DemoBlock>
      </PageContainer>
    );
  }
}
