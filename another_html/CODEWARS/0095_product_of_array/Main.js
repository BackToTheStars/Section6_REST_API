
const productOfArray = (array) => {
  let x = 1;
  let result = (array.length===0) ? 0 : (array.map(el => {x=x*el; return x}));
  return result===0 ? 0 : result.pop();
}

console.log(productOfArray([1, 2, 4]));
console.log(productOfArray([4]));
console.log(productOfArray([0]));
console.log(productOfArray([]));



