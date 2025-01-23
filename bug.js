const http = require('http');

const server = http.createServer((req, res) => {
  // Keep the connection alive for a long time
  // without sending any data
  // This will lead to a memory leak because of the open socket
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});