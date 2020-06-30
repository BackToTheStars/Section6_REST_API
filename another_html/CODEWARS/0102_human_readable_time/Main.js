
function humanReadable(seconds) {

  let hours = Math.floor(seconds / 3600);
  if (hours < 10) hours = '0' + hours.toString();

  let minutes = Math.floor((seconds % 3600) / 60);
  if (minutes < 10) minutes = '0' + minutes.toString();

  seconds = Math.floor((seconds % 3600) % 60);
  if (seconds < 10) seconds = '0' + seconds.toString();

  let res = [hours, minutes, seconds].join(':');

  return res;

}



console.log(humanReadable(0) === '00:00:00');
console.log(humanReadable(5) === '00:00:05');
console.log(humanReadable(60) === '00:01:00');
console.log(humanReadable(86399) === '23:59:59');
console.log(humanReadable(359999) === '99:59:59');