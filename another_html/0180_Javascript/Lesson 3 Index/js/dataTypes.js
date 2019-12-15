/* Primitive types:
   String, number, boolean, null, undefined, symbol.

   Reference types:
   Objects: array, date, object literal, and more...
*/

// String
const string1 = "Hey Maya";
console.log(typeof string1);
console.log(string1);

// Numbers
const number1 = 56;
console.log(typeof number1);
console.log(number1);

// Booleans true/false
let isAlive = true;
console.log(typeof isAlive);
console.log(isAlive);

// Null
let nullVar = null;
console.log(typeof nullVar);
console.log(nullVar);

// Undefined
let undefVar;
console.log(typeof undefVar);
console.log(undefVar);

// Symbols - further read about Symbols and Let
const symbol1 = Symbol();
console.log(typeof symbol1);
console.log("symbol1 = ", symbol1, ".");

// Reference types
// Array
let peopleArray = ["William", "Tiger", "Joe"];
console.log("peopleArray type = ", typeof peopleArray);
console.log(peopleArray);
console.log(peopleArray[2]); // Joe

// Object literals
let homeTown = {
    city: "Moscow",
    district: "Khodynka",
    buildingType: "highrise"
}
console.log(typeof homeTown);
console.log(homeTown);

// Date
let todayDate = new Date();
console.log(typeof todayDate);
console.log(todayDate);


