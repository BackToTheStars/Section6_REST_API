
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// Primary visual variables
var x1 =  100;
var y1 =  50;
var x2 =  502;
var y2 =  630;
var xTextShift =     11;
var yHeaderShift =   28;
var yHeaderSpacer =  26;
var headerWidth =    70;
var yTextSpacer =    26;
var yTextShift =     28;
var frameWidth =      2;
var framesColor =  "#3D3D3D";
var headerColor =  "#DDDDDD";
var textColor =    "#FFFFFF";

// Misc variables calculations
var xT =      x1 + xTextShift;
var yH =      y1 + yHeaderShift;
var yHeader = y1 + headerWidth;
var yT =      y1 + headerWidth + yTextShift; 

// Main white rectangle
c.fillStyle = textColor;
c.fillRect(x1, y1, x2-x1, y2-y1);

// Header grey rectangle
c.fillStyle = headerColor;
c.fillRect(x1, y1, x2-x1, headerWidth);

// Frames
c.beginPath();
c.moveTo(x1, y1);
c.lineTo(x1, y2);
c.lineTo(x2, y2);
c.lineTo(x2, y1);
c.lineTo(x1, y1);
c.moveTo(x1, yHeader);
c.lineTo(x2, yHeader);
c.lineWidth = frameWidth;
c.strokeStyle = framesColor;
// can be "#fa34a3", rgba(), text value, any css.
c.stroke();

// Highlighting
c.fillStyle = "#FFFB1E"; c.fillRect(xT+39, yT+58, 134, yTextSpacer);
c.fillStyle = "#FFFB1E"; c.fillRect(xT+22, yT+136, 134, yTextSpacer);
c.fillStyle = "#FFFB1E"; c.fillRect(xT+17, yT+214, 349, yTextSpacer);
c.fillStyle = "#FFFB1E"; c.fillRect(xT-6, yT+240, 215, yTextSpacer);
c.fillStyle = "#FFFB1E"; c.fillRect(xT+107, yT+266, 190, yTextSpacer);
c.fillStyle = "#FFFB1E"; c.fillRect(xT-6, yT+292, 185, yTextSpacer);
c.fillStyle = "#FFFB1E"; c.fillRect(xT+59, yT+318, 187, yTextSpacer);
c.fillStyle = "#FFFB1E"; c.fillRect(xT-6, yT+344, 380, yTextSpacer);
c.fillStyle = "#FFFB1E"; c.fillRect(xT-6, yT+370, 85, yTextSpacer);
c.fillStyle = "#FFFB1E"; c.fillRect(xT+299, yT+370, 75, yTextSpacer);
c.fillStyle = "#FFFB1E"; c.fillRect(xT-6, yT+396, 115, yTextSpacer);
c.fillStyle = "#FFFB1E"; c.fillRect(xT+203, yT+396, 171, yTextSpacer);
c.fillStyle = "#FFFB1E"; c.fillRect(xT-6, yT+422, 80, yTextSpacer);

// Header text
c.font = "20px Arial";
c.fillStyle = "black";
c.fillText("Boeing creates ‘Disruptive Computing", xT, yH);
c.fillText("and Networks’ special unit", xT, yH + yHeaderSpacer);

c.font = "20px Arial";
c.fillStyle = "black";
c.fillText("The new organization will be based in", xT, yT);
c.fillText("Southern California and operate as part of", xT, yT+1*yTextSpacer);
c.fillText("Boeing’s Engineering, Test & Technology", xT, yT+2*yTextSpacer);
c.fillText("unit. Charles Toups is moving over from", xT, yT+3*yTextSpacer);
c.fillText("his post as vice president and general", xT, yT+4*yTextSpacer);
c.fillText("manager of Boeing Research & Technolo-", xT, yT+5*yTextSpacer);
c.fillText("gy to lead DC&N as vice president and", xT, yT+6*yTextSpacer);
c.fillText("general manager.", xT, yT+7*yTextSpacer);
c.fillText("Boeing’s wants to stimulate innovations", xT, yT+8*yTextSpacer);
c.fillText("in secure communications, AI and comp-", xT, yT+9*yTextSpacer);
c.fillText("lex system optimization. AI has obvious", xT, yT+10*yTextSpacer);
c.fillText("applications in autonomous flight, while", xT, yT+11*yTextSpacer);
c.fillText("quantum computers could be tailor-made", xT, yT+12*yTextSpacer);
c.fillText("for the network optimization challenges", xT, yT+13*yTextSpacer);
c.fillText("for next-generation air traffic management", xT, yT+14*yTextSpacer);
c.fillText("systems. DC&N will also focus on advan-", xT, yT+15*yTextSpacer);
c.fillText("ced sensing as well as neuromorphic pro-", xT, yT+16*yTextSpacer);
c.fillText("cessing, which aims to mimic the human", xT, yT+17*yTextSpacer);
c.fillText("brain’s approach to information processing.", xT, yT+18*yTextSpacer);

// The new organization will be based in Southern California and operate as part of Boeing’s Engineering, Test & Technology unit. Charles Toups is moving over from his post as vice president and general manager of Boeing Research & Technology to lead DC&N as vice president and general manager.
//Boeing’s wants to stimulate innovations in secure communications, AI and complex system optimization. AI has obvious applications in autonomous flight, while quantum computers could be tailor-made for the network optimization challenges for next-generation air traffic management systems. DC&N will also focus on advanced sensing as well as neuromorphic processing, which aims to mimic the human brain’s approach to information processing.