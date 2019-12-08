
// TERNARY OPERATOR

console.log('*******  TERNARY OPERATOR  *******');

let money = 35000;

let car = money >= 30000 ? 'Mercedes' : 'Lada'; 
console.log(car);

money >= 15000 ? console.log('better') : console.log('not so good');



// SWITCH STATEMENT

console.log('*******  SWITCH STATEMENT  *******');

let job = 'teacher';
switch (job) {
    case 'teacher':
    case 'учитель':
        console.log('учит детей');
        break;
    case 'driver':
        console.log('Водит такси в Москве');
        break;
    case 'designer':
        console.log('рисует картины');
        break;
    default:
        console.log('другая профессия');
};

let age = 9;
switch (true) {
    case age < 10:
        console.log('он маленький мальчик');
        break;
    case age >=10 && age <16:
        console.log('он подросток');
        break;
    case age >=16 && age < 70:
        console.log('он крепкий мужик');
        break;
    default:
        console.log('ну он ваще серьёзный старик');
}



// TRUTHY AND FALSY VALUES

// falsy values: undefined, null, 0, '', NaN
// they will be turned to false

// truthy values: NOT falsy

console.log('*******  TRUTHY AND FALSY VALUES  *******');

var height = 0;
if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable is not defined');
}


// EQUALITY OPERATORS

// == типы переменных не должны совпадать, 0 == '0'
// does type coercion = convertion to assess

// === типы переменных должны быть одинаковыми
console.log('*******  EQUALITY OPERATORS  *******');

height = 23;
height == '23' ? console.log(true) : console.log(false);
height === '23' ? console.log(true) : console.log(false);



// FUNCTIONS

// principle DRY = Don't Repeat Yourself

console.log('*******  FUNCTIONS  *******');

function calculateAge(birthYear) {
    return 2019-birthYear;
};

console.log(calculateAge(1979));
console.log(calculateAge(1977));
console.log(calculateAge(1981));

function yearsToRetirement(year, name) {
    let age = calculateAge(year);
    var retirement = 90 - age;
    console.log(name + ' retires in '+ retirement + ' years');
}

yearsToRetirement(1981, 'Лёвка');
yearsToRetirement(1979, 'Николка');
yearsToRetirement(1977, 'Илюха');
yearsToRetirement(2009, 'Маечка');
yearsToRetirement(1945, 'Мама');



// FUNCTION STATEMENTS & EXPRESSIONS
console.log('*** FUNCTION STATEMENTS & EXPRESSIONS ***');

// Function Declaration
function firstFunction(name, job) {
    return 0;
}

// Function Expression
let whatDoYouDo = function (name, job) {
    switch(job) {
        case 'teacher':
            return name + ' учит детей философии';
        case 'driver':
            return name + ' возит поддоны с барахлом';
        case 'banker':
            return name + ' финансирует проекты';
        default:
            return name + ' делает что-то загадочное'
    };
};

console.log(whatDoYouDo('Николай', 'Программист'));
console.log(whatDoYouDo('Коля Чертухин', 'driver'));
console.log(whatDoYouDo('Профессор Дугин', 'teacher'));
console.log(whatDoYouDo('Костин', 'banker'));