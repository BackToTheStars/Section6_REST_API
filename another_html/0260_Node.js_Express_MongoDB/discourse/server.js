const fs = require('fs');
const http = require('http');
const url = require('url');

//ctrl-D - select all "..."


// SERVER

const replaceTemplate = (template, source) => {
  let output = template.replace(/{%sourceNAME%}/g, source.sourceName);
  output = output.replace(/{%IMAGE%}/g, source.image);
}

const tempTurn = fs.readFileSync(`${__dirname}/template-turn.html`, 'utf8');
const data = fs.readFileSync(`${__dirname}/data.json`, 'utf8');
const dataObj = JSON.parse(data);   // Loads once

const server = http.createServer((req, res) => {
  
  const { query, pathname } = url.parse(req.url, true);

  // OVERVIEW PAGE

  if (pathname === '/' || pathname === '/overview') {   // Routing to different adresses
    res.writeHead(200, {'Content-Type': 'text/html'});

    const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join(''); // map [] "dataObj" to [] "cardsHtml" & join it to a string
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output);                                                             // возвращает изменённую html-страницу

  // TURN PAGE  

  } else if (pathname === '/turn') {
    console.log(query);
    console.log(pathname);
    res.writeHead(200, {'Content-Type': 'text/html'});
    const turnNumber = dataObj[query.id];                  // http://127.0.0.1:8000/turn?id=0   = dataObj[0]
    const output = replaceTemplate(tempTurn, turnNumber);  // tempTurn мы загрузили из файла template-turn.html 
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