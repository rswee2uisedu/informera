import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import withFeedData from '../services/withFeedData';

const RefreshFeedButton = props => <Card className="panelItem">
    <Card.Body>
        <Button onClick={props.feedData.refreshFeedData}>Refresh Feed Data</Button>
    </Card.Body>
</Card>

export default withFeedData(RefreshFeedButton);