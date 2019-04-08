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

const SuggestedFeed = (props) => {

    const isInUsersFeeds = () => {
        return props.url in UserFeedService.subscribedFeeds;
    }

    const getPrefix = () => {
        return isInUsersFeeds() ? "-" : "+";
    }

    const onClick = () => {
        if (isInUsersFeeds()) {
            UserFeedService.removeFeed(props.url);
        } else {
            UserFeedService.addFeed(props.url);
        }
        props.feedData.refreshFeedData();
    }

    return <Container>
        <Row>
            <Button variant="link" size="sm" onClick={onClick}>
                <span className="suggestedFeedItem"><b>{getPrefix()}</b></span> <span className="suggestedFeedItemName">{props.name}</span>
            </Button>
        </Row>
    </Container>
}

export default withFeedData(SuggestedFeed);