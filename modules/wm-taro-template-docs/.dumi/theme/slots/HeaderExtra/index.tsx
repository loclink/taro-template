import React, { type FC } from 'react';
import PKG from '../../../../../../package.json';
const HeaderExtra: FC = () => {
  return (
    <div style={{ marginLeft: '20px', fontSize: '14px' }}>v{PKG.version}</div>
  );
};

export default HeaderExtra;
