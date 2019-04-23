# Infomera Proxy Server

### `npm start`

Starts the proxy server.<br>
Proxy server listens on specified port and pulls rss data when requested by the client app.<br>
Specify the port in the file server.js, line 3: <br>
```javascript
const port = 3001;
```

If using a different port, be sure to update the url value in client/src/services/FeedDataService.js as well<br>

```javascript
const PROXY_URL = Config.RSSProxyAddress || 'http://localhost:3001?rss=';
```