
var markMass = 96;         // kg
var markHeight = 1.83;     // meters

var johnMass = 70;         // kg
var johnHeight = 1.57;     // meters

var bmiMark = markMass / (markHeight * markHeight);
var bmiJohn = johnMass / (johnHeight * johnHeight);

console.log("Mark BMI = " + bmiMark);
console.log("John BMI = " + bmiJohn);

var markBmiIsHigher = bmiMark > bmiJohn // boolean
console.log(markBmiIsHigher);

/*
if (bmiMark > bmiJohn) {
    console.log(true);
}
    else console.log(false);
*/