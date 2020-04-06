
const fs = require('fs');
const http = require('http');
const url = require('url');

//ctrl-D - select all "..."

// SERVER

const replaceTemplate = (template, turn) => {
  let output = template.replace(/{%QUOTES%}/g, turn.quotes);
  output = output.replace(/{%COMMENTS%}/g, turn.classes);
  output = output.replace(/{%TITLE%}/g, turn.firstName);
  output = output.replace(/{%SECONDTITLE%}/g, turn.secondName);
  output = output.replace(/{%IMAGE%}/g, turn.imageLink)
  output = output.replace(/{%IMAGEDESCRIPTION%}/g, turn.imageDescription)
  output = output.replace(/{%AUTHOR%}/g, turn.author)

  return output;
};

const replaceText = (template, text) => {
  let output = template.replace(/{%TEXT%}/g, text);
  return output;  
};

const tempTurn = fs.readFileSync(`${__dirname}/template-turn.html`, 'utf8');
const tempTextPieces = fs.readFileSync(`${__dirname}/template-text-pieces.html`, 'utf8');
const tempQuotePieces = fs.readFileSync(`${__dirname}/template-quotes-pieces.html`, 'utf8');

const data = fs.readFileSync(`${__dirname}/data.json`, 'utf8');
const dataObj = JSON.parse(data); // Loads once

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // OVERVIEW PAGE

  if (pathname === '/' || pathname === '/overview') {
    // Routing to different adresses
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join(''); // map [] "dataObj" to [] "cardsHtml" & join it to a string
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output); // возвращает изменённую html-страницу

    // TURN PAGE
  } else if (pathname === '/turn') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    const turn = dataObj[query.id]; // http://127.0.0.1:8000/turn?id=0   = dataObj[0]
    //console.log(dataObj[query.id].text);
    let output = replaceTemplate(tempTurn, turn); // tempTurn мы загрузили из файла template-turn.html, turnNumber = 0
    
    let textHtml = dataObj[query.id].text.map(el => replaceText(tempTextPieces, el)).join('');
    output = output.replace('{%TEXT_PIECES%}', textHtml);

    textHtml = dataObj[query.id].quotes.map(el => replaceText(tempQuotePieces, el)).join('');
    output = output.replace('{%QUOTE_PIECES%}', textHtml);

    res.end(output);                                    // возвращает изменённую html-страницу

    // API
  } else if (pathname === '/api') {
    res.writeHead(200, {
      'Content-Type': 'application/json', // Header for JSON
    });
    res.end(data);

    // NOT FOUND PAGE
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html', // Headers
      'my-own-header': 'hello world',
    });
    res.end('<h1>Page not found</h1>'); // Can return html
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});

// start server: "node server.js"
