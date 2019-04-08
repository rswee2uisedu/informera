/** 
 * App logo, displayed in header or above options panel
 * (Requirements 9)                         
 */

import React from 'react';
import Card from 'react-bootstrap/Card';
import RefreshFeedButton from './RefreshFeedButton';

const Logo = props => {
    return <Card>
        <Card.Body>
            <h1>Informera <RefreshFeedButton /></h1>
        </Card.Body>
    </Card>
}

export default Logo;
