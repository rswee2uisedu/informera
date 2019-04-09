import moment from 'moment';
import FeedDataService from '../services/FeedDataService';
import UserFeedService from '../services/UserFeedService';

const successMock = {
  items: [{ id: 1, isoDate: moment() }, { id: 2, isoDate: moment() }],
};
const jsonMock = Promise.resolve(successMock);
const fetchMock = Promise.resolve({
  json: () => jsonMock,
});
jest.spyOn(global, 'fetch').mockImplementation(() => fetchMock);

describe('Feed data service tests.', () => {
  beforeAll(() => {
    UserFeedService.addFeed('http://rss.cnn.com/rss/cnn_topstories.rss');
    UserFeedService.addFeed('http://rss.slashdot.org/Slashdot/slashdotMain');
  });

  test('Promise is rejected if updateCallback was not provided.', () => {
    const badService = new FeedDataService();
    expect(badService.loadFeedData()).rejects;
  });

  test('updateCallback is called correct number of times.', async () => {
    //Should be called 3 times, once for each of the 2 feeds, and one when it resolves
    const updateCallback = jest.fn();
    const service = new FeedDataService(updateCallback);

    await service.loadFeedData();

    expect(updateCallback).toHaveBeenCalledTimes(3);
  });

  test('Correct number of feeds should be added to feed list.', async () => {
    //Should have 4 items total, 2 per feed.
    const updateCallback = jest.fn();
    const service = new FeedDataService(updateCallback);

    await service.loadFeedData();

    expect(service.feedData.length).toBe(4);
  });
});
