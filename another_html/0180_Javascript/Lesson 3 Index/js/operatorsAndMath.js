console.time("Timer All");

let num1 = 5;
let num2 = 6;

let result = num1 % num2; 
// % will return a remainder after division  

// Math Object

value = Math.PI;
value = Math.ceil(Math.PI);  // = 4, round up
value = Math.round(Math.PI); // = 3, round
value = Math.floor(Math.PI);  // = 3, round down
value = Math.sqrt(Math.abs(-16727));  // square root, abs = modulus

console.time("Timer 1");
value = Math.pow(2, 1023);  // возведение в степень, максимальное число
console.log(value);
console.timeEnd("Timer 1");

value = Math.max(num1, num2, 67, 5, 35);
console.log("Max number =", value);

value = Math.round(Math.random()*1000);
console.log("Random number =", value);


console.timeEnd("Timer All");