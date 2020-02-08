

// 1 -----------------------------------------------------------------------------------------
function absoluteValuesSumMinimization(a: number[]): number {

    const isEven = a.length % 2 === 0;

    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 18, 12, 6, 8]));



// 2 -----------------------------------------------------------------------------------------
function add(param1: number, param2: number): number {
    return param1 + param2;
}

function add2(...param1: number[]): number {
    console.log(param1)

    let total = 0;

    param1.forEach((num) => {
        total += num;
    });

    return total;
}


console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1,2,3,4,5));
console.log(add2(2,3));



// 3 -----------------------------------------------------------------------------------------
function addBorder(picture: string[]): any {
    
    const wall = '*'.repeat(picture[0].length + 2);

    picture.unshift(wall);
    picture.push(wall);

    for (let i=0; i < picture.length - 1; i++) {
        picture[i] = '*'.concat(picture[i], '*');
    }

    return picture;
};

console.log(addBorder(["abc", "ded"]));

// 4 -----------------------------------------------------------------------------------------
// Дано двузначное число. Вывести сумму его цифр. 

function add3 (x: any): number {
  return x.toString().split('').reduce((a:string, b:string) => parseInt(a) + parseInt(b));
}
                                    // arrow function notation, arguments and return
                                    // scope of "this" would also change with arrow notation
console.log(add3(86))



// 5 -----------------------------------------------------------------------------------------
// Дан массив. Вывести максимальную сумму его соседних чисел.

function adjacentElementsProduct(inputArray: number[]): number {

    let max = inputArray[0] * inputArray[1];
    console.log(max);
  
  for (let i=1; i < inputArray.length-1; i++) {
    let sum = inputArray[i] * inputArray[i+1];
    console.log(sum);
    
    max = max < sum ? sum : max;
  }

  return max;
}
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))

// 6 -----------------------------------------------------------------------------------------
// Дан массив из строк. Вывести массив, состоящий из его самых длинных строк.

function allLongestStrings(inputArray: string[]): string[] {
  let result = [];
  let longer = '';
  
//  for (let i = 0; i < inputArray.length; i++) {
  inputArray.forEach((word: string) => {                   // сделал ошибку for вместо .forEach
    longer = longer.length < word.length ? word : longer;
    console.log(longer);
  })

//  for (let i = 0; i < inputArray.length; i++) {
  inputArray.forEach((word: string) => {
    if (word.length == longer.length) {
      result.push(word);
    };
  });  

  return result;
};

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
