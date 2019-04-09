/** 
 * App logo, displayed in header or above options panel
 * (Requirements 9)                         
 */
import React from 'react';
import RefreshFeedButton from './RefreshFeedButton';

const Logo = props => {
    return <nav className="header panelItem navbar navbar-expand-lg navbar-dark bg-primary">
        <h1>
            Informera <RefreshFeedButton />
        </h1>
    </nav>
}

export default Logo;
