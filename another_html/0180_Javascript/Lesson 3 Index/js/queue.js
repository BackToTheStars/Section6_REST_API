
function moveQueue(array, nextItem) {
    array.push(nextItem);
    return array.shift();
}

function changeNumber(number, changeByWhat) {
    number += changeByWhat;
    number *= changeByWhat;
    return number;
}

var testArray = [1,2,3,4,5,6,7,8]
var number1 = Math.PI;


console.log('Old array: ', JSON.stringify(testArray));
console.log(moveQueue(testArray, 555));
// this function will access testArray and will process it to a new array

console.log('New array: ', JSON.stringify(testArray));

console.log(changeNumber(number1, 3)); 
// it can access the array, but cannot access the number variable ???
console.log(number1);

