/** 
 * column for logo, refresh button, options, and suggested feeds panels 
 * (Requirements 2.a, 4.a, 6.a)                         
 */

import React from 'react';
import Col from 'react-bootstrap/Col';
import Logo from './Logo';
import RefreshFeedButton from './RefreshFeedButton';
import Options from './Options';
import Suggested from './Suggested';
import './PanelsColumn.css';

const PanelsColumn = () => {
    return <Col xs="3">
        <Logo />
        <RefreshFeedButton />
        <Options />
        <Suggested />
    </Col>
}

export default PanelsColumn;