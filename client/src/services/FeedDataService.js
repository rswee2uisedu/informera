import { FeedStatus } from './constants';
import UserFeedService from './UserFeedService'
import moment from 'moment';

//TODO: hit azure when in release mode
const PROXY_URL = 'http://localhost:3001/rss/';

class FeedDataService {
    updateCallback;
    feedData;
    loadingStatus = {
        status: FeedStatus.NotLoaded,
        feedCompletionPercentage: 0
    };
    feedLoadedCount;
    feedErrorCount;
    totalFeedCount;

    constructor(updateCallback) {
        this.updateCallback = updateCallback;
    }

    loadFeedData = () => new Promise(async (resolve, reject) => {
        try {
            if (!this.updateCallback) {
                reject('Update callback not provided.');
                return;
            }

            if (this.status === FeedStatus.Loading) {
                reject('Feeds are currently being loaded.');
                return;
            }

            //Reset existing values
            this.feedData = [];
            this.loadingStatus.status = FeedStatus.Loading;
            this.loadingStatus.feedCompletionPercentage = 0;
            this.feedLoadedCount = 0;
            this.feedErrorCount = 0;
            this.totalFeedCount = Object.keys(UserFeedService.subscribedFeeds).length;

            await Promise.all(Object.keys(UserFeedService.subscribedFeeds).forEach(async feed => {
                try {
                    const request = await fetch(`${PROXY_URL}${feed}`);
                    const response = await request.json();
                    this.feedData = this.feedData.concat(response.items);
                } catch (e) {
                    console.log(e);
                    this.feedErrorCount++;
                } finally {
                    this.feedLoadedCount++;
                    this.loadingStatus.feedCompletionPercentage = (this.feedLoadedCount / this.totalFeedCount) * 100;

                    this.updateCallback();
                }
            }));

            //Error condition is if all feeds failed
            if (this.feedErrorCount !== this.totalFeedCount) {
                this.loadingStatus.status = FeedStatus.Complete;

                //Sort feed items by date desc
                this.feedData.sort((a, b) => moment(b.isoDate) - moment(a.isoDate));
                resolve();
            } else {
                this.status = FeedStatus.loadingStatus.Error;
                reject('Unable to pull feed data.');
            }

            this.updateCallback();
        } catch (e) {
            console.log(`${e}: did you forget to run proxy server if running locally?`);
        }
    });
};

export default FeedDataService;