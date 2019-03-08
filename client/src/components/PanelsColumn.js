import React from 'react';
import Logo from './Logo';
import Options from './Options';
import SuggestedFeeds from './SuggestedFeeds';

const PanelsColumn = (props) => {
    return (
        <div className="rightColumn componentContainer">
            panels column
            <Logo />
            <Options />
            <SuggestedFeeds />
        </div>
    );
}

export default PanelsColumn;