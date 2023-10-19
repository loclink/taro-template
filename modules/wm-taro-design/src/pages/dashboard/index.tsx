import list from '../../config.json';
import DemoHome from '@/base-ui/demo-home';

const Index = () => {
  return <DemoHome list={list || []}></DemoHome>;
};

export default Index;
