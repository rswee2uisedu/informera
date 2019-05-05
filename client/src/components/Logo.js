/**
 * App logo, displayed in header or above options panel
 * (Requirements 9)
 */
import React from 'react';
import RefreshFeedButton from './RefreshFeedButton';

const Logo = props => {
  const style = {
    width: props.width,
    height: '6em',
  };

  return (
    <nav
      className="header panelItem navbar navbar-expand-lg navbar-dark bg-primary"
      style={style}
    >
      <h1>
        Informera <RefreshFeedButton />
      </h1>
    </nav>
  );
};

export default Logo;
