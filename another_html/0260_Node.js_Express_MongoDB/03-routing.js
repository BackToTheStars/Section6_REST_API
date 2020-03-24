const fs = require('fs');
const http = require('http');
const url = require('url');

//ctrl-D - select all "..."

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end('Hello from server!');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});

// start server: "node server.js"