
const fs = require('fs');

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');                      // можно загрузить текст из файла
console.log(textIn);

const textOut = `Это диалог о Боге: ${textIn}.\nCreated on ${Date.now()}`;       // можно использовать при выводе новости/текста в файл или на экран
fs.writeFileSync('./txt/output.txt', textOut); 

console.log('File written.');