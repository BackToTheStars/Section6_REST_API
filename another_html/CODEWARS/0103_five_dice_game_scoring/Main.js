
function score( array ) {

  // counting
  let count = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};
  let res = 0;
  array.map(el => {
    if (el === 1) count['1']++;
    if (el === 2) count['2']++;
    if (el === 3) count['3']++;
    if (el === 4) count['4']++;
    if (el === 5) count['5']++;
    if (el === 6) count['6']++;
  });

  if (count['1'] >= 3) {
    res = res + 1000;
    count['1'] = count['1'] - 3;
    if (count['1'] === 1) {
      res = res + 100;
      count['1']--;
    }
    if (count['1'] === 1) res = res + 100;
  }
  res = res + (count['1'] * 100);

  if (count['5'] >= 3) {
    count['5'] = count['5'] - 3;
    res = res + 500;
    if (count['5'] === 1) {
      res = res + 50;
      count['5']--;
    }
    if (count['5'] === 1) res = res + 50;
  }
  res = res + (count['5'] * 50);


  if (count['2'] >= 3) res = res + 200;
  if (count['3'] >= 3) res = res + 300;
  if (count['4'] >= 3) res = res + 400;
  if (count['6'] >= 3) res = res + 600;

  return res;
}

//   Three 1's => 1000 points
//   Three 6's =>  600 points
//   Three 5's =>  500 points
//   Three 4's =>  400 points
//   Three 3's =>  300 points
//   Three 2's =>  200 points
//   One   1   =>  100 points
//   One   5   =>   50 point

//   5 1 3 4 1   50 + 2 * 100 = 250
//   1 1 1 3 1   1000 + 100 = 1100
//   2 4 4 5 4   400 + 50 = 450

console.log(score( [2, 3, 4, 6, 2] ) === 0  );
console.log(score( [4, 4, 4, 3, 3] ) === 400);
console.log(score( [2, 4, 4, 5, 4] ) === 450);


