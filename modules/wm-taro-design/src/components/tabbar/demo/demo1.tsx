import react from 'react';
import { Tabbar, TabbarItem } from 'wm-taro-design';

export default function Demo() {
  const [active, setActive] = react.useState<string | number>(0);
  return (
    <Tabbar active={active} onChange={(e) => setActive(e.detail)} safeAreaInsetBottom={false} fixed={false}>
      <TabbarItem index={0} icon='home-o'>
        标签
      </TabbarItem>
      <TabbarItem index={1} icon='search'>
        标签
      </TabbarItem>
      <TabbarItem index={2} icon='friends-o'>
        标签
      </TabbarItem>
      <TabbarItem index={3} icon='setting-o'>
        标签
      </TabbarItem>
    </Tabbar>
  );
}
