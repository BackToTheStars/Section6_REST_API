
const fs = require('fs');
const http = require('http');
const url = require('url');
const slugify = require('slugify');

const replaceTemplate = require('./03-routing/modules/replaceTemplate'); 
//module import from a file, we give it the same name as before

//ctrl-D - select all "..."


// SERVER

const tempOverview = fs.readFileSync(`${__dirname}/03-routing/template-overview.html`, 'utf8');
const tempCard = fs.readFileSync(`${__dirname}/03-routing/template-card.html`, 'utf8');
const tempProduct = fs.readFileSync(`${__dirname}/03-routing/template-product.html`, 'utf8');

const data = fs.readFileSync(`${__dirname}/03-routing/data.json`, 'utf8');
const dataObj = JSON.parse(data);   // Loads once

const slugs = dataObj.map(el => slugify(el.productName, { lower: true }));

console.log(slugify('Fresh Avocados', { lower: true }));
console.log(slugs);


const server = http.createServer((req, res) => {
//  console.log(req.url);
//  console.log(url.parse(req.url, true));  // this will show the query object
  
  const { query, pathname } = url.parse(req.url, true);

  // OVERVIEW PAGE

  if (pathname === '/' || pathname === '/overview') {   // Routing to different adresses
    res.writeHead(200, {'Content-Type': 'text/html'});

    const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join(''); // map [] "dataObj" to [] "cardsHtml" & join it to a string
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output);                                    // возвращает изменённую html-страницу

  // PRODUCT PAGE  

  } else if (pathname === '/product') {
    console.log(query);
    console.log(pathname);
    res.writeHead(200, {'Content-Type': 'text/html'});
    const product = dataObj[query.id];                  
    const output = replaceTemplate(tempProduct, product);
    // res.end('This is the PRODUCT');
    res.end(output);
  // API

  } else if (pathname === '/api') {

    res.writeHead(200, {
      'Content-Type': 'application/json'    // Header for JSON
    });
    res.end(data);

  // NOT FOUND PAGE 

  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html',          // Headers
      'my-own-header': 'hello world'
    });
    res.end('<h1>Page not found</h1>');     // Can return html
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});


// start server: "node server.js"