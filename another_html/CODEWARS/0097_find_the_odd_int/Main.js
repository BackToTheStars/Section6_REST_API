
function findOdd(array) {
  let times=0;
  let result=0;
  array.map(el =>{
    for (let i=0; i<array.length; i++) {
      if (el===array[i]) times++;
    }
    if (times%2===1) {
      result=el;
    }
    times=0;
  });
  return result;
}


console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); //, 5);
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))                 //, -1);
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]))              //, 5);
console.log(findOdd([10]))                                       //, 10);
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]))                   // 10);
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]))                  //, 1);











