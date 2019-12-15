
let ourArray = [`Simpson`, `J`, `cat`];  // creates the array
console.log(ourArray);

ourArray.push([`happy`, `joy`]);     // adds element to the end
console.log(ourArray);

ourArray.unshift(Math.PI);    // adds first element to array
console.log(ourArray);

let poppedElement = ourArray.pop();  // removes last element
console.log(ourArray);
console.log(poppedElement);

let pickedElement = poppedElement[1];
console.log(pickedElement);
let symbol = pickedElement[0];
console.log(symbol);

poppedElement = ourArray.shift();   // removes first element
console.log(ourArray);
console.log(poppedElement);
