
function likes(names) {
  let answer='';
  let l = names.length;
  switch (l) {
    case 0: {answer = 'no one likes this'; break;}
    case 1: {answer = names[0] + ' likes this'; break;}
    case 2: {answer = names[0] + ' and ' + names[1] + ' like this'; break;}
    case 3: {answer = names[0] + ', '+ names[1] + ' and ' + names[2] + ' like this'; break;}
  }
  if (l>3) {
    answer = names[0] + ', ' + names[1] + ' and ' + (l-2) + ' others like this';
  }
  return answer;
}

console.log(likes([]));
console.log(likes(['Peter']));
console.log(likes(['Jacob', 'Alex']));
console.log(likes(['Max', 'John', 'Mark']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));


























