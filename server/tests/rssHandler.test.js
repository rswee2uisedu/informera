const rssHandler = require('../rssHandler');

let response;
let headers = [];

//Swallow logging
console.log = () => {};

describe('rssHandler tests.', () => {
    beforeEach(() => {
        headers = [];

        response = {
            setHeader: (key, value) => { headers.push(value); },
            end: () => { }
        }
    });

    test('Invalid feed urls return 400.', async () => {
        const pathName = { pathname: '/rss/invalid' };
        await rssHandler.handleRss(response, pathName);

        expect(response.statusCode).toBe(400);
    });

    test('Invalid feed returns 422.', async () => {
        const rssFeedPath = 'http://www.google.com';
        await rssHandler.handleRss(response, rssFeedPath);

        expect(response.statusCode).toBe(422);
    });

    test('Valid feed returns 200, and response set up correctly.', async () => {
        const rssFeedPath = 'http://rss.slashdot.org/Slashdot/slashdotMain';
        await rssHandler.handleRss(response, rssFeedPath);

        expect(response.statusCode).toBe(200);
        expect(headers[0] === 'application/json');
    });
});