/** 
 * list of feeds for suggested feed panel, subscribe/unsubscribe button for each item
 * (Requirements 4.a, 5.a, 5.b)                         
 */

import React from 'react';
import UserFeedService from '../services/UserFeedService';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import withFeedData from '../services/withFeedData';


const ManagedFeed = (props) => {
    const className = props.className ? "managedFeed " + props.className : "managedFeed";

    const isInUsersFeeds = () => {
        return props.url in UserFeedService.subscribedFeeds;
    }

    const onClick = () => {
        if (isInUsersFeeds()) {
            UserFeedService.removeFeed(props.url);
        } else {
            UserFeedService.addFeed(props.url, props.name);
        }
        props.feedData.refreshFeedData();
    }

    return <Container>
        <Row>
            <Button variant="link" size="sm" onClick={onClick}>
                <span className={className}>{props.name}</span>
            </Button>
        </Row>
    </Container>
}

export default withFeedData(ManagedFeed);
