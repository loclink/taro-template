/* eslint-disable */

import { Component } from 'react';
import PageContainer from '@/components/page-container';
import DemoBlock from '@/base-ui/demo-block/index';
import Demo1 from './demo1';

export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  state = { active: 0 };
  render() {
    return (
      <PageContainer title='transition 动画' className='pages-transition-index'>
        <DemoBlock title='基础用法' padding>
          <Demo1 />
        </DemoBlock>
      </PageContainer>
    );
  }
}
