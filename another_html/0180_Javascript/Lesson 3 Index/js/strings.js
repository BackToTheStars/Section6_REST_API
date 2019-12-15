/*********
 
CODE OUTPUT

\'  single quote
\"  double quote
\\  backslash
\n  newline
\r  carriage return
\t  tab
\b  backspace
\f  form feed

can be '', "", or `` for strings

**********/

function addWords(adjective, noun, verb, adverb) {
    let result = ``;
    result += `The ` + adjective + noun + verb + ` to the store `+ adverb;
    return result;
}

let stringVar = `HelloWorld! `;
stringVar[0] = `K`;  // cannot change string like that, error

stringVar += `And it is beautiful`;    // adding another piece

let stringVarLength = stringVar.length // string length
let stringSymbol = stringVar[0];       // can be from 0 to 30 here


//*****************************************

console.log(stringVar);
console.log(stringVarLength);
console.log(stringSymbol);
console.log(addWords(`big `,`dog `, `ran `, `quickly.`));
console.log(addWords(`yellow `,`bike `, `flew `, `slowly.`));
