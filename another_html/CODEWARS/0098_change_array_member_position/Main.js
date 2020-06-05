
let array = [{id:30, value:1}, {id:} 20, 30, 40, 50, 60, 70, 80]

const changePos = () => {
  let tempArray = [...array];

  return tempArray;
}


console.log(changePos(3, -1));
console.log(changePos(5, 1));
console.log(changePos(2, -1));
console.log(changePos(1, -1));
console.log(changePos(8, 1));
