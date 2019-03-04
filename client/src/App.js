import React, { Component } from 'react';
import './App.css';
import sampleUserFeeds from './services/sampleUserFeeds.json';
import sampleFeedData from './services/sampleFeedData.json';
import FeedDataContext from './services/FeedDataContext';
import SampleConsumer from './services/SampleConsumer';

class App extends Component {
  state = {
    feeds: {
      userFeeds: sampleUserFeeds.userFeeds,
      feedData: sampleFeedData.feedData
    }
  };

  render() {
    return (
      <FeedDataContext.Provider value={this.state.feeds}>
        <SampleConsumer />
      </FeedDataContext.Provider>
    );
  }
}

export default App;
