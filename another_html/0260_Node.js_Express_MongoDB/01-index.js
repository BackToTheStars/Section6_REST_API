

const fs = require('fs');
const http = require('http');

// BLOCKING CODE, SYNCHRONOUS

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);
const textOut = `Это диалог о Боге: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut); 
console.log('File written.');


// NON-BLOCKING CODE, ASYNCHRONOUS

fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
  if (err) return console.log('error reading file');
  console.log(data);
  fs.writeFile('./txt/start.txt', `${data}\n${data}`, 'utf-8', (err, data) => {
    console.log('File was written.')
  });
});



console.log('I will print this first.');