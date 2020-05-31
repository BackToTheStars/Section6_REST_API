// Calculating with Functions
// Я её вообще не понимаю, почему можно делать
// function (b) => return function(a) => a+b

function number(n, func) { return func ? func(n) : n }

function zero(func)  { return number(0, func) }
function one(func)   { return number(1, func) }
function two(func)   { return number(2, func) }
function three(func) { return number(3, func) }
function four(func)  { return number(4, func) }
function five(func)  { return number(5, func) }
function six(func)   { return number(6, func) }
function seven(func) { return number(7, func) }
function eight(func) { return number(8, func) }
function nine(func)  { return number(9, func) }

function plus(b)      { return function(a) {return Math.floor(a + b)}}
function minus(b)     { return function(a) {return Math.floor(a - b)}}
function times(b)     { return function(a) {return Math.floor(a * b)}}
function dividedBy(b) { return function(a) {return Math.floor(a / b)}}

number(7, plus(5)) => plus(7)

console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3
























