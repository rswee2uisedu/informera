/**
 * handles adding and removing feeds for users. reads subcriptions from local storage
 * (Requirements: 1.d, 2.d, 3.a, 5.a,b)
 */

import LocalStorage from 'local-storage';

class UserFeedService {
  constructor() {
    // Singleton pattern
    const instance = this.constructor.instance;
    if (instance) return instance;
    this.constructor.instance = this;

    // Get locally saved subscribed user feeds
    this.subscribedFeeds = {};
    if (LocalStorage.get('userFeeds')) {
      this.subscribedFeeds = LocalStorage.get('userFeeds');
    }
  }

  // Add a new feed to subscribed feeds and local save data
  addFeed(feed, name) {
    this.subscribedFeeds[feed] = name;
    LocalStorage.set('userFeeds', this.subscribedFeeds);
  }

  // Add multiple feeds
  addFeeds(feeds = {}) {
    for (const [feed, name] of Object.entries(feeds)) {
      if (!(feed in this.subscribedFeeds)) this.addFeed(feed, name);
    }
  }

  // Remove a feed from subscribed feeds and local save data
  removeFeed(feed) {
    delete this.subscribedFeeds[feed];
    LocalStorage.set('userFeeds', this.subscribedFeeds);
  }

  // Checks if the user is subscribed to a given feed or not
  isSubscribed(feed) {
    return feed.props.url in this.subscribedFeeds;
  }
}

export default new UserFeedService();
