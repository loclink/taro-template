/* eslint-disable */
import react from 'react';
import { Cell, Cascader } from 'wm-taro-design';

import { regionData, codeToText } from 'element-china-area-data';

export default function Demo() {
  const [isVisible, setIsVisible] = react.useState(false);
  const [value1, setValue1] = react.useState<string[]>([]);
  const [title, setTitle] = react.useState<string[]>([]);
  const change1 = (value) => {
    setValue1(value);
    setTitle([codeToText[value[0]], codeToText[value[1]], codeToText[value[2]]]);
  };

  return (
    <>
      <Cell
        title='选择地址'
        value={title.length ? title.join('-') : '请选择地址'}
        onClick={() => {
          setIsVisible(true);
        }}
      ></Cell>
      <Cascader
        // scrollIntoView={false}
        childrenKey='children'
        visible={isVisible}
        value={value1}
        textKey='label'
        title='地址选择'
        options={regionData}
        closeable
        onClose={() => {
          setIsVisible(false);
        }}
        onChange={change1}
      />
    </>
  );
}
