/* eslint-disable */
import react from 'react';
import { Tabbar, TabbarItem } from 'wm-taro-design';

export default function Demo() {
  const [active, setActive] = react.useState<string | number>('setting');
  return (
    <Tabbar active={active} onChange={(e) => setActive(e.detail)} fixed={false}>
      <TabbarItem index={0} name='home' icon='home-o'>
        标签
      </TabbarItem>
      <TabbarItem index={1} name='search' icon='search'>
        标签
      </TabbarItem>
      <TabbarItem index={2} name='friends' icon='friends-o'>
        标签
      </TabbarItem>
      <TabbarItem index={3} name='setting' icon='setting-o'>
        标签
      </TabbarItem>
    </Tabbar>
  );
}
