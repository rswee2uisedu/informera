const url = require('url');
const querystring = require('query-string');
const rssHandler = require('./rssHandler');

//Starts server - this has been split out from server.js to make unit testing easier
exports.createServer = async (req, res) => {
  try {
    //Get querystring value from requested url
    //This is where we are expecting the requested feed type and feed url to be
    const parsedUrl = querystring.parse(url.parse(req.url).query);

    //Handle cors preflight requests
    if (req.method === 'OPTIONS') {
      addCorsHeaders(res);
      res.statusCode = 200;
      res.end();
    } else if (req.method === 'GET' && parsedUrl.rss) {
      //Proxy rss requests
      rssHandler.handleRss(addCorsHeaders(res), parsedUrl.rss);
    } else {
      //Any invalid requests return not found
      res.statusCode = 404;
      res.end();
    }
  } catch (e) {
    //Dump any errors to the log and return 500
    console.log(e);
    res.statusCode = 500;
    res.end();
  }
};

//Enables cross origin requests from any source, but only allowing options and get
addCorsHeaders = res => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  return res;
};
