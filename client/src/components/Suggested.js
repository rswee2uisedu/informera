import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import SuggestedFeed from './SuggestedFeed';

const Suggested = () => {

    return <Card className="panelItem">
        <Card.Body>
            <h4 className="text-truncate">Suggested</h4>
            <SuggestedFeed />
            <SuggestedFeed />
            <SuggestedFeed />
            <SuggestedFeed />
            <Form.Control type="text" size="sm" placeholder="Find new feeds!" />
        </Card.Body>
    </Card>

}

export default Suggested;