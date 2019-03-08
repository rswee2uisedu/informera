import React, { useState } from 'react';
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

const FeedColumn = (props) => {

    const [state, setState] = useState({
        feeds: {
            userFeeds: sampleUserFeeds.userFeeds,
            feedData: new Array(10000).fill(null).map(getFakedFeed)
          },
    });

    return (
        <FeedDataContext.Provider value={state.feeds}>
            <div className="leftColumn componentContainer">
                feed column
                <FeedList />
            </div>
        </FeedDataContext.Provider>
    );
}

export default FeedColumn;