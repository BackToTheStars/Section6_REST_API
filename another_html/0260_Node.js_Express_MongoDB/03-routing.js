
const fs = require('fs');
const http = require('http');
const url = require('url');

//ctrl-D - select all "..."


const data = fs.readFileSync(`${__dirname}/03-routing/data.json`, 'utf8');
const dataObj = JSON.parse(data);   // Loads once


const server = http.createServer((req, res) => {
  console.log(req.url);
  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {   // Routing
    res.end('This is the OVERVIEW');
  } else if (pathName === '/product') {
    res.end('This is the PRODUCT');
  } else if (pathName === '/api') {

    res.writeHead(200, {
      'Content-Type': 'application/json'                // Header for JSON
    });
    res.end(data);

  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html',                      // Headers
      'my-own-header': 'hello world'
    });
    res.end('<h1>Page not found</h1>');                 // Can return html
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});


// start server: "node server.js"