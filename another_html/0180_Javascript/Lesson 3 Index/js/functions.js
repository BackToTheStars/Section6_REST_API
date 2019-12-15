
var myGlobal = 10;   // global variable
var outerWear = 'T-shirt'; 
// can be '', "", or `` for strings
var sum = 7;

function LoadShip() {
    oopsGlobal = 5; 
    // !!! becomes global if not written "var"
    // if written "var", it will be local & inaccessible from other functions
    // or the program body 
}


function PrepareToLaunch() {
    var output = ``;
    if (typeof myGlobal !=`undefined`) {
        output += `myGlobal: ` + myGlobal;  
        // adds string 10 to string myGlobal
    }
    if (typeof oopsGlobal != `undefined`) {
        output += ` oopsGlobal: ` + oopsGlobal;
    }
    console.log(output);
    console.log(typeof myGlobal);
    console.log(typeof oopsGlobal);
}


function myOutfit() {
    var outerWear = 'sweater';  // takes priority over global scope
    return outerWear;           // same name of variable, but does not mess
}

function minusFive(number) {    // takes number to process
    return number - 5;          // returns result
}

function timesSeven(number)     // takes number to process
{
    return number * 7;          // returns result
}

function addThree() {
    sum += 3;
}

LoadShip();
PrepareToLaunch();
addThree();               // will add 3 to gloval var sum

console.log(oopsGlobal);
console.log(myOutfit());  // returns local variable inside function 
console.log(outerWear);   // returns global variable, named the same 

console.log(minusFive(1000));
console.log(timesSeven(100));
console.log('sum = ', sum);  // global var sum equals 10 now
console.log(addThree());     // will returned undefined
