
function sumIntervals(intervals){
  let x1 = 100000000000000000000;
  let y1 = -1000000000000000000000;
  let x2 = 0;
  let y2 = 0
  let range = [x1, y1];
  let l = 0;

  let isThereAlready = false;
  intervals = intervals.sort((a, b) => a[0] - b[0])

  let res = intervals.map((el, i) => {
    let copyIntervals = [...intervals];
    copyIntervals.splice(i, 1);

    copyIntervals.map(el2 => {
      if (el[0] >= el2[0] && el[1] <= el2[1]) isThereAlready = true;
    })

  if (isThereAlready === false || i===0) {
    x1 = range[0];
    y1 = range[1];
    x2 = el[0];
    y2 = el[1];

    if (x2 > x1 && y2 > y1 && x2 < y1) l = l + y2 - y1;
    if (x2 < x1 && y2 < y1 && y2 > x1) l = l + y1 - x2;
    if (x1 < x2 && y1 > y2) l = l;
    if (x2 < x1 && y2 > y1) l = y2 - x2;
    if (x1 < x2 && y1 < x2) l = l + y2 - x2;
    if (y2 < x1 && y2 < y1) l = l + y2 - x2;

    range[0] = x2;
    range[1] = y2;
  }
    isThereAlready = false;
  });

  return l;
}



function ideal(intervals){
  let numbers = [];
  intervals.forEach( function(interval) {
    for (var i = interval[0] ; i < interval[1] ; i++) {
      if (numbers.indexOf(i) == -1) numbers.push(i);
    }
  });
  return numbers.length;
}

function ideal2(intervals) {
  const ranges = new Set();

  intervals.forEach(([start, end]) => {
    for (let i = start; i < end; i++) ranges.add(i);
  });

  return ranges.size;
}

function ideal3(m) {
  var a = [];
  for (let i = 0; i < m.length; i++) for (let j = m[i][0]; j < m[i][1]; j++) if (a.indexOf(j) === -1) a.push(j);
  return a.length;
}

function ideal4(intervals){
  let s = new Set();
  for ( let i=0; i< intervals.length; i++)
    for (let j=intervals[i][0]; j<intervals[i][1];j++)
      s.add(j);
  return s.size;
}

console.log(sumIntervals([[1,5]]) === 4);
console.log(' ');
console.log(sumIntervals([[1,5],[6,10]]) === 8);
console.log(' ');

console.log(sumIntervals([[1,5],[1,5]]) === 4);
console.log(' ');

console.log(sumIntervals([[1,4],[7, 10],[3, 5]]) === 7);
console.log(' ');

console.log(sumIntervals([ [ 1, 12 ], [ 3, 6 ], [ 5, 8 ], [ 7, 10 ], [ 9, 12 ] ]) === 11);
console.log(' ');

console.log(sumIntervals([ [ 1, 5 ], [ 7, 10 ], [ 3, 5 ] ]) === 7);
console.log(' ');
