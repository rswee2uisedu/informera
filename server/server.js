const http = require('http');
const proxyHost = require('./proxyHost');
const port = process.env.PORT || 3001;

const server = http.createServer(proxyHost.createServer);

server.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});