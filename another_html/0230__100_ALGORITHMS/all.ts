

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



