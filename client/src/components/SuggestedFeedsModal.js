import React, { useState } from 'react';
import faker from 'faker';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { suggestedFeeds } from '../services/feedSources';
import UserFeedService from '../services/UserFeedService';
import withFeedData from '../services/withFeedData';

const feedItems = [];
Object.keys(suggestedFeeds).forEach(feed => {
    feedItems.push({
        title: suggestedFeeds[feed],
        url: feed,
        image: faker.image.image(),
    });
});

const SuggestedFeedsModal = props => {
    const [selectedFeeds, setSelectedFeeds] = useState([]);

    const saveFeeds = onHide => {
        if (selectedFeeds.length) {
            UserFeedService.addFeeds(selectedFeeds);
            props.feedData.refreshFeedData();
            onHide();
        }
    }

    const selectFeedItem = feedItem => {
        const existingIndex = selectedFeeds.indexOf(feedItem.url);
        if (existingIndex === -1) {
            selectedFeeds.push(feedItem.url);
            setSelectedFeeds(selectedFeeds);
        } else {
            selectedFeeds.splice(existingIndex, 1);
            setSelectedFeeds(selectedFeeds);
        }
    };

    return <Modal
        show={props.show}
        centered
        size="lg"
        onHide={props.onHide}>
        <Modal.Header>
            <Modal.Title>Choose some feeds to get started</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="suggestedFeedsModalContainer">
                {feedItems.map(fi => <FeedItem key={fi.title} feedItem={fi} onFeedSelected={selectFeedItem} />)}
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button className="suggestedFeedsModalSaveButton" variant="primary" onClick={() => saveFeeds(props.onHide)}>Save</Button>
            <Button className="suggestedFeedsModalSkipButton" variant="secondary" onClick={props.onHide}>Skip</Button>
        </Modal.Footer>
    </Modal>
}


const FeedItem = props => {
    const [selected, setSelected] = useState(false);

    const selectFeed = () => {
        setSelected(!selected);
        props.onFeedSelected(props.feedItem);
    }

    return <Card
        className="suggestedFeedsModalItem"
        bg={selected ? 'secondary' : ''}
        onClick={selectFeed}
    >
        <Card.Body>
            <Card.Title>{props.feedItem.title}</Card.Title>
            <Card.Text>
                <img src={props.feedItem.image} alt={props.feedItem.title + " image"} height="100px" />
            </Card.Text>
        </Card.Body>
    </Card>
}

export default withFeedData(SuggestedFeedsModal);