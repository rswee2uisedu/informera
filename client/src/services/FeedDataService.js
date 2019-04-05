import { FeedStatus } from './constants';
import UserFeedService from './UserFeedService'
import moment from 'moment';

//Toggle lines below to hit proxy server running locally
const PROXY_URL = 'https://informera-proxy.azurewebsites.net?rss=';
//const PROXY_URL = 'http://localhost:3001?rss=';

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

            //console.log(UserFeedService);
            const feeds = Object.keys(UserFeedService.subscribedFeeds);

            //Reset existing values
            this.feedData = [];
            this.loadingStatus.status = FeedStatus.Loading;
            this.loadingStatus.feedCompletionPercentage = 0;
            this.feedLoadedCount = 0;
            this.feedErrorCount = 0;
            this.totalFeedCount = feeds.length;

            await Promise.all(feeds.map(async feed => {
                try {
                    const request = await fetch(`${PROXY_URL}${feed}`);
                    const response = await request.json();

                    //Filter out items without an iso date and add source title and url to item object
                    const finalData = response.items
                        .filter(fi => fi.isoDate)
                        .map(fi => {
                            fi.sourceTitle = response.title;
                            fi.sourceUrl = response.link;
                            return fi;
                        })

                    this.feedData = this.feedData.concat(finalData);
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
            if (this.totalFeedCount === 0 || this.feedErrorCount !== this.totalFeedCount) {
                this.loadingStatus.status = FeedStatus.Complete;

                //Sort feed items by date desc
                this.feedData.sort((a, b) => moment(b.isoDate) - moment(a.isoDate));
                resolve();
            } else {
                this.status = FeedStatus.Error;
                reject('Unable to pull feed data.');
            }

            this.updateCallback();
        } catch (e) {
            console.log(e);
            this.status = FeedStatus.Error;
        }
    });
};

export default FeedDataService;