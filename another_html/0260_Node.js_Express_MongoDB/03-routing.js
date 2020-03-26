
const fs = require('fs');
const http = require('http');
const url = require('url');

//ctrl-D - select all "..."


// SERVER

const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);

  if (!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
  return output;

}

const tempOverview = fs.readFileSync(`${__dirname}/03-routing/template-overview.html`, 'utf8');
const tempCard = fs.readFileSync(`${__dirname}/03-routing/template-card.html`, 'utf8');
const tempProduct = fs.readFileSync(`${__dirname}/03-routing/template-product.html`, 'utf8');

const data = fs.readFileSync(`${__dirname}/03-routing/data.json`, 'utf8');
const dataObj = JSON.parse(data);   // Loads once



const server = http.createServer((req, res) => {
  console.log(req.url);
  const pathName = req.url;

  // OVERVIEW PAGE

  if (pathName === '/' || pathName === '/overview') {   // Routing to different adresses
    res.writeHead(200, {'Content-Type': 'text/html'});

    const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join(''); // map [] "dataObj" to [] "cardsHtml" & join it to a string
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output);

  // PRODUCT PAGE  

  } else if (pathName === '/product') {
    res.end('This is the PRODUCT');

  // API

  } else if (pathName === '/api') {

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