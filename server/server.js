/**
 * Entry point of server application.
 */

const http = require('http');
const proxyHost = require('./proxyHost');

//Get port from Azure, or fall back to 3001 if running locally
const port = process.env.PORT || 3001;

//Start server
const server = http.createServer(proxyHost.createServer);

server.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
