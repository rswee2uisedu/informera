# Infomera Proxy Server

### `npm start`

Starts the proxy server.<br>
Proxy server listens on port provided by Azure, or falls back to specified port for local development.<br>
Specify the port in the file server.js, line 9: <br>
```javascript
const port = process.env.PORT || 3001;
```

If using a different port, be sure to update the RSSProxyAddress value in client/src/config.js as well<br>

```javascript
const Config = {
  RSSProxyAddress: 'https://informera-proxy.azurewebsites.net?rss=',
  MaxSuggestedPanelFeeds: 5,
  MaxRemovePanelFeeds: 5,
};
```