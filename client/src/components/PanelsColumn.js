import React from 'react';
import Logo from './Logo';
import Options from './Options';
import Suggested from './Suggested';
import './PanelsColumn.css';

const PanelsColumn = (props) => {
    return (
        <div className="rightColumn componentContainer">
            panels column
            <Logo />
            <Options />
            <Suggested />
        </div>
    );
}

export default PanelsColumn;