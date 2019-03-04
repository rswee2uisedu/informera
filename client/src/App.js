import React, { Component } from 'react';
import './App.css';
import sampleUserFeeds from './services/sampleUserFeeds.json';
import sampleFeedData from './services/sampleFeedData.json';
import FeedDataContext from './services/FeedDataContext';
import FeedList from './components/FeedList';
import Logo from './components/Logo';
import Options from './components/Options';
import SuggestedFeeds from './components/SuggestedFeeds';

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
