
function createPhoneNumber(a){

  return('(' + a[0] + a[1] + a[2] + ') ' + a[3] + a[4] + a[5] + '-' + a[6] + a[7] + a[8] + a[9])
}


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) === "(123) 456-7890");
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) === "(111) 111-1111");
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) === "(123) 456-7890");
