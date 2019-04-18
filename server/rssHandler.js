const Parser = require('rss-parser');
const parser = new Parser();

//To verify feed url is in valid format
const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

//Handles routes starting with /rss
//Loads data from source and converts response to json
exports.handleRss = async (res, rssFeedPath) => {
  //Ensure request is in valid format
  if (rssFeedPath && URL_REGEX.test(rssFeedPath)) {
    console.log(`Request received for RSS feed: ${rssFeedPath}`);

    try {
      //Load data from source
      const feed = await parser.parseURL(rssFeedPath);

      console.log(`Successfully pulled RSS data for: ${rssFeedPath}`);

      //Return ok with json data
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(feed));
    } catch (e) {
      //Invalid feed, send invalid request
      console.log(`Invalid RSS feed found for: ${rssFeedPath}`);
      res.statusCode = 422;
      res.end();
    }
  } else {
    //Invalid request
    res.statusCode = 400;
    res.end();
  }
};
