import { Component } from 'react';
import DemoBlock from '@/base-ui/demo-block/index';
import Demo1 from './demo1';
import { PageContainer } from 'wm-taro-design';
export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  state = { active: 0 };
  render() {
    return (
      <PageContainer title='ConfigProvider 全局配置' className='pages-config-provider-index'>
        <DemoBlock title='通过 ConfigProvider 覆盖Button主题色' padding>
          <Demo1 />
        </DemoBlock>
      </PageContainer>
    );
  }
}
