import React from 'react';
import Col from 'react-bootstrap/Col';
import Logo from './Logo';
import Options from './Options';
import Suggested from './Suggested';
import './PanelsColumn.css';

const PanelsColumn = () => {
    return <Col xs="3">
        <Logo />
        <Options />
        <Suggested />
    </Col>
}

export default PanelsColumn;