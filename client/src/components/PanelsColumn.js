/** 
 * column for logo, refresh button, options, and suggested feeds panels 
 * (Requirements 2.a, 4.a, 6.a)                         
 */

import React from 'react';
import Col from 'react-bootstrap/Col';
import HeaderSide from './HeaderSide';
import Options from './Options';
import ManageFeeds from './ManageFeeds';
import './PanelsColumn.css';

const PanelsColumn = () => {
    return <Col xs="3">
        <HeaderSide />
        <Options />
        <ManageFeeds />
    </Col>
}

export default PanelsColumn;