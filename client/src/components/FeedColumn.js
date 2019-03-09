import React from 'react';
import Col from 'react-bootstrap/Col';
import FeedList from './FeedList';
import FeedDataContext from '../services/FeedDataContext';
import faker from 'faker';
import sampleUserFeeds from '../services/sampleUserFeeds.json';

const getFakedFeed = () => {
    return {
        userFeedId: faker.random.number(),
        content: faker.lorem.paragraph(),
        contentSnippet: faker.lorem.sentence(),
        isoDate: faker.date.recent(),
        link: faker.internet.url(),
        pubDate: faker.date.recent(),
        title: faker.lorem.sentence()
    };
};

const feeds = {
    userFeeds: sampleUserFeeds.userFeeds,
    feedData: new Array(10000).fill(null).map(getFakedFeed)
};

const FeedColumn = () => {
    return <FeedDataContext.Provider value={feeds}>
        <Col xs="9">
            <FeedList />
        </Col>
    </FeedDataContext.Provider>
}

export default FeedColumn;