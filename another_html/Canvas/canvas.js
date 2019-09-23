
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// Main white rectangle
c.fillStyle = "#FFFFFF";
c.fillRect(300, 150, 400, 580);

// Header grey rectangle
c.fillStyle = "#DDDDDD";
c.fillRect(300, 150, 400, 70);

// Frames
c.beginPath();
c.moveTo(300, 150);
c.lineTo(300, 730);
c.lineTo(700, 730);
c.lineTo(700, 150);
c.lineTo(300, 150);
c.moveTo(300, 220);
c.lineTo(700, 220);
c.lineWidth=2
c.strokeStyle = "#3D3D3D";
// can be "#fa34a3", rgba(), text value, any css.
c.stroke();

// Highlighting
c.fillStyle = "#FFFB1E"; c.fillRect(350, 306, 134, 26);
c.fillStyle = "#FFFB1E"; c.fillRect(333, 384, 134, 26);
c.fillStyle = "#FFFB1E"; c.fillRect(328, 462, 349, 26);
c.fillStyle = "#FFFB1E"; c.fillRect(305, 488, 215, 26);
c.fillStyle = "#FFFB1E"; c.fillRect(418, 514, 190, 26);
c.fillStyle = "#FFFB1E"; c.fillRect(305, 540, 185, 26);
c.fillStyle = "#FFFB1E"; c.fillRect(370, 566, 187, 26);
c.fillStyle = "#FFFB1E"; c.fillRect(305, 592, 380, 26);
c.fillStyle = "#FFFB1E"; c.fillRect(305, 618, 85, 26);
c.fillStyle = "#FFFB1E"; c.fillRect(610, 618, 75, 26);
c.fillStyle = "#FFFB1E"; c.fillRect(305, 644, 115, 26);
c.fillStyle = "#FFFB1E"; c.fillRect(514, 644, 170, 26);
c.fillStyle = "#FFFB1E"; c.fillRect(305, 670, 80, 26);

// Header text
c.font = "20px Arial";
c.fillStyle = "black";
c.fillText("Boeing creates ‘Disruptive Computing", 311, 178);
c.fillText("and Networks’ special unit", 311, 204);

c.font = "20px Arial";
c.fillStyle = "black";
c.fillText("The new organization will be based in", 311, 248);
c.fillText("Southern California and operate as part of", 311, 274);
c.fillText("Boeing’s Engineering, Test & Technology", 311, 300);
c.fillText("unit. Charles Toups is moving over from", 311, 326);
c.fillText("his post as vice president and general", 311, 352);
c.fillText("manager of Boeing Research & Technolo-", 311, 378);
c.fillText("gy to lead DC&N as vice president and", 311, 404);
c.fillText("general manager.", 311, 430);
c.fillText("Boeing’s wants to stimulate innovations", 311, 456);
c.fillText("in secure communications, AI and comp-", 311, 482);
c.fillText("lex system optimization. AI has obvious", 311, 508);
c.fillText("applications in autonomous flight, while", 311, 534);
c.fillText("quantum computers could be tailor-made", 311, 560);
c.fillText("for the network optimization challenges", 311, 586);
c.fillText("for next-generation air traffic management", 311, 612);
c.fillText("systems. DC&N will also focus on advan-", 311, 638);
c.fillText("ced sensing as well as neuromorphic pro-", 311, 664);
c.fillText("cessing, which aims to mimic the human", 311, 690);
c.fillText("brain’s approach to information processing.", 311, 716);

// The new organization will be based in Southern California and operate as part of Boeing’s Engineering, Test & Technology unit. Charles Toups is moving over from his post as vice president and general manager of Boeing Research & Technology to lead DC&N as vice president and general manager.
//Boeing’s wants to stimulate innovations in secure communications, AI and complex system optimization. AI has obvious applications in autonomous flight, while quantum computers could be tailor-made for the network optimization challenges for next-generation air traffic management systems. DC&N will also focus on advanced sensing as well as neuromorphic processing, which aims to mimic the human brain’s approach to information processing.