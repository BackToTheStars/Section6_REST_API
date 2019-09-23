
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = 'red'
c.fillRect(100, 100, 300, 200);

console.log(canvas);

// Line
c.beginPath();
c.moveTo(100, 600);
c.lineTo(500, 100);
c.lineTo(700, 300);
c.strokeStyle = "blue";
// can be "#fa34a3", rgba(), text value, any css.
c.stroke();