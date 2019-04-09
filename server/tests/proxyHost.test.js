const proxyHost = require('../proxyHost');
const rssHandler = require('../rssHandler');

jest.mock('../rssHandler');

let response;
let headers = [];

//Swallow logging
console.log = () => {};

describe('Proxy server tests.', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    headers = [];
    response = {
      end: () => {},
      setHeader: (key, value) => {
        headers.push(key);
      },
    };
  });

  test('Invalid routes return 404.', async () => {
    const request = {
      method: 'GET',
      url: '/',
    };

    await proxyHost.createServer(request, response);

    expect(response.statusCode).toBe(404);
  });

  test('Server errors return 500.', async () => {
    const request = {};

    await proxyHost.createServer(request, response);

    expect(response.statusCode).toBe(500);
  });

  test('Preflight requests return 200, with headers set.', async () => {
    const request = {
      method: 'OPTIONS',
      url: '?rss',
    };

    await proxyHost.createServer(request, response);

    expect(response.statusCode).toBe(200);
    expect(headers.length).toBe(4);
  });

  test('Gets with correct route will call into rssHandler.', async () => {
    const request = {
      method: 'GET',
      url: '?rss=testUrl',
    };

    await proxyHost.createServer(request, response);

    expect(rssHandler.handleRss).toHaveBeenCalledTimes(1);
  });
});
