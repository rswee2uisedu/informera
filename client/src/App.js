import React, { Component } from 'react';
import faker from 'faker';
import './App.css';
import sampleUserFeeds from './services/sampleUserFeeds.json';
import FeedDataContext from './services/FeedDataContext';
import FeedList from './components/FeedList';
import Logo from './components/Logo';
import Options from './components/Options';
import SuggestedFeeds from './components/SuggestedFeeds';

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

class App extends Component {
  state = {
    feeds: {
      userFeeds: sampleUserFeeds.userFeeds,
      feedData: new Array(10000).fill(null).map(getFakedFeed)
    }
  };

  render() {
    return (
      <FeedDataContext.Provider value={this.state.feeds}>
        <div className="app componentContainer">
          <div className="leftColumn componentContainer">
            left column
            <FeedList />
          </div>
          <div className="rightColumn componentContainer">
            right column
            <Logo />
            <Options />
            <SuggestedFeeds />
          </div>
        </div>
      </FeedDataContext.Provider>
    );
  }
}

export default App;
