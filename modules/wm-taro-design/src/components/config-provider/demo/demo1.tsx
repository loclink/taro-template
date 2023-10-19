import { ConfigProvider, Button, IThemeVars } from 'wm-taro-design';

const themeVars: IThemeVars = {
  primaryColor: '#e19a9a',
  buttonPrimaryColor: '#000'
};

export default function Demo() {
  return (
    <>
      <ConfigProvider themeVars={themeVars}>
        <Button round block type='primary'>
          提交
        </Button>
      </ConfigProvider>
    </>
  );
}
