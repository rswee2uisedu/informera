/** 
 * handles adding and removing feeds for users. reads subcriptions from local storage
 * (Requirements: 1.d, 2.d, 3.a, 5.a,b)
 */

import LocalStorage from 'local-storage';

class UserFeedService {

    constructor() {
        //Singleton pattern
        const instance = this.constructor.instance;
        if (instance) return instance;
        this.constructor.instance = this;

        this.subscribedFeeds = {};
        if (LocalStorage.get('userFeeds')) {
            this.subscribedFeeds = LocalStorage.get('userFeeds');
        }
    }

    addFeed(feed) {
        this.subscribedFeeds[feed] = true;
        LocalStorage.set('userFeeds', this.subscribedFeeds);
    }

    addFeeds(feeds = []) {
        feeds.forEach(feed => {
            if (!(feed in this.subscribedFeeds)) this.addFeed(feed)
        });
    };

    removeFeed(feed) {
        delete this.subscribedFeeds[feed];
        LocalStorage.set('userFeeds', this.subscribedFeeds);
    }

}

export default new UserFeedService();