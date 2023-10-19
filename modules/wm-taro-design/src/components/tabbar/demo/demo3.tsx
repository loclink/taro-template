/* eslint-disable */
import react from 'react';
import { Tabbar, TabbarItem } from 'wm-taro-design';

export default function Demo() {
  const [active, setActive] = react.useState<string | number>('home');
  return (
    <Tabbar active={active} onChange={(e) => setActive(e.detail)} fixed={false}>
      <TabbarItem icon='home-o'>标签</TabbarItem>
      <TabbarItem icon='search' dot>
        标签
      </TabbarItem>
      <TabbarItem icon='friends-o' info='5'>
        标签
      </TabbarItem>
      <TabbarItem icon='setting-o' info='20'>
        标签
      </TabbarItem>
    </Tabbar>
  );
}
