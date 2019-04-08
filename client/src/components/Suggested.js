/** 
 * Suggested feed panel, user can manage subscriptions from this panel
 * (Requirements 4.a, 5.a, 5.b)                         
 */

import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import SuggestedFeed from './SuggestedFeed';
import { suggestedFeeds } from '../services/feedSources';

const Suggested = () => {

    const feeds = [];
    Object.keys(suggestedFeeds).forEach((feed, idx) => {
        feeds.push(<SuggestedFeed key={idx} url={feed} name={suggestedFeeds[feed]} />)
    });

    return <Card className="panelItem">
        <Card.Body>
            <h4 className="text-truncate">Suggested</h4>
            {feeds}
            <Form.Control type="text" size="sm" placeholder="Add new feeds!" />
        </Card.Body>
    </Card>

}

export default Suggested;