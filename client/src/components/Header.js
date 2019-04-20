/**
 * Nav shown Header, displays site name
 * (Requirements 9)
 */

import React, { Fragment } from 'react';
import Logo from './Logo';

const Header = props => {
  return <Fragment>{props.isShown && <Logo />}</Fragment>;
};

export default Header;
