
function highAndLow(str) {
  try {
    let res = str.split(' ');
    res = res.map(el => parseInt(el)).sort((a, b) => a - b);
    if (res.length === 1) {
      res = res[0] + ' ' + res[0];
    }
    else {
      res = res.pop().toString() + ' ' + res[0].toString();
    }
    return res;

  } catch (error) {
    console.error(error);
  }
}


console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6") === "542 -214");
console.log(highAndLow("42") === "42 42");