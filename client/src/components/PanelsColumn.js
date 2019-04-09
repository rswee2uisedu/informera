/**
 * column for logo, refresh button, options, and suggested feeds panels
 * (Requirements 2.a, 4.a, 6.a)
 */

import React from 'react';
import HeaderSide from './HeaderSide';
import Options from './Options';
import ManageFeeds from './ManageFeeds';
import './PanelsColumn.css';

const PanelsColumn = () => {
  const style = {
    display: 'block',
    width: '20em',
  };

  return (
    <div style={style}>
      <HeaderSide />
      <Options />
      <ManageFeeds />
    </div>
  );
};

export default PanelsColumn;
