import FeedDataService from '../services/FeedDataService';

const successMock = {
    items: [
        { id: 1 },
        { id: 2 }
    ]
};
const jsonMock = Promise.resolve(successMock);
const fetchMock = Promise.resolve({
    json: () => jsonMock
});
jest.spyOn(global, 'fetch').mockImplementation(() => fetchMock);

describe('Feed data service tests.', () => {
    test('Promise is rejected if updateCallback was not provided.', () => {
        const badService = new FeedDataService();
        expect(badService.loadFeedData()).rejects;
    });

    test('updateCallback is called correct number of times.', async () => {
        //Should be called 5 times, once for each of the 4 feeds, and one when it resolves
        const updateCallback = jest.fn();
        const service = new FeedDataService(updateCallback);

        await service.loadFeedData();

        expect(updateCallback).toHaveBeenCalledTimes(5);
    });

    test('Correct number of feeds should be added to feed list.', async () => {
        //Should have 8 items total, 2 per feed.
        const updateCallback = jest.fn();
        const service = new FeedDataService(updateCallback);

        await service.loadFeedData();

        expect(service.feedData.length).toBe(8);
    });
});