/**
 * column for logo, refresh button, options, and suggested feeds panels
 * (Requirements 2.a, 4.a, 6.a)
 */

import React from 'react';
import HeaderSide from './HeaderSide';
import Options from './Options';
import ManageFeeds from './ManageFeeds';

const PanelsColumn = () => {
  const style = {
    display: 'block',
    width: '20em',
    height: '100vh',
    maxHeight: '100vh',
    overflowY: 'auto',
  };

  return (
    <div style={style} className="scrollbars">
      <HeaderSide />
      <Options />
      <ManageFeeds />
    </div>
  );
};

export default PanelsColumn;
