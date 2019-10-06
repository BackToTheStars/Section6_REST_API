
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// Primary visual variables
var i;
var x1 =  450;
var y1 =  150;
var x2 =  852;
var y2 =  730;
var xTextShift =     11;
var yHeaderShift =   29;
var yHeaderSpacer =  26;
var headerWidth =    70;
var yTextSpacer =    26;
var yTextShift =     28;
var frameWidth =      2;
var framesColor =  "#3D3D3D";
var headerColor =  "#DDDDDD";
var textColor =    "#FFFFFF";

var menuWidth =                   300;
var menuFrameWidth =                2;
var menuFrameWidthSecondary =     0.5;
var menuFrameColor =          "black";
var menuVerticalDivisionsNumber =   6;
var menuColor =               "white";
var menuTextColor =           "black";
var menuTextXShift =                6;
var menuTextYShift =               19;
var menuClassesYWidth =            26;

// Misc variables calculations
var xT =      x1 + xTextShift;
var yH =      y1 + yHeaderShift;
var yHeader = y1 + headerWidth;
var yT =      y1 + headerWidth + yTextShift; 
var yMenu = window.innerHeight;
var menuYDivisions = Math.floor(innerHeight / menuVerticalDivisionsNumber);

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

c.font = "14px Arial";
c.fillStyle = "white";
c.fillText("October 17, 2018", x2-109, y2+14);
c.fillText("www.geekwire.com", x1+1, y2+14);

// The new organization will be based in Southern California and operate as part of Boeing’s Engineering, Test & Technology unit. Charles Toups is moving over from his post as vice president and general manager of Boeing Research & Technology to lead DC&N as vice president and general manager.
//Boeing’s wants to stimulate innovations in secure communications, AI and complex system optimization. AI has obvious applications in autonomous flight, while quantum computers could be tailor-made for the network optimization challenges for next-generation air traffic management systems. DC&N will also focus on advanced sensing as well as neuromorphic processing, which aims to mimic the human brain’s approach to information processing.







// Primary visual variables
x1 =  1150;
y1 =  150;
x2 =  1552;
y2 =  730;
xTextShift =     11;
yHeaderShift =   29;
yHeaderSpacer =  26;
headerWidth =    70;
yTextSpacer =    26;
yTextShift =     28;
frameWidth =      2;
framesColor =  "#3D3D3D";
headerColor =  "#DDDDDD";
textColor =    "#FFFFFF";

// Misc variables calculations
xT =      x1 + xTextShift;
yH =      y1 + yHeaderShift;
yHeader = y1 + headerWidth;
yT =      y1 + headerWidth + yTextShift; 

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
c.fillStyle = "#FFFB1E"; c.fillRect(xT+39, yT-20, 154, yTextSpacer);
c.fillStyle = "#FFFB1E"; c.fillRect(xT+105, yT+6, 264, yTextSpacer);
c.fillStyle = "#FFFB1E"; c.fillRect(xT-6, yT+32, 375, yTextSpacer);
c.fillStyle = "#FFFB1E"; c.fillRect(xT-6, yT+58, 195, yTextSpacer);
c.fillStyle = "#FFFB1E"; c.fillRect(xT+147, yT+110, 220, yTextSpacer);
c.fillStyle = "#FFFB1E"; c.fillRect(xT-6, yT+188, 375, yTextSpacer);
c.fillStyle = "#FFFB1E"; c.fillRect(xT+81, yT+240, 295, yTextSpacer);
c.fillStyle = "#FFFB1E"; c.fillRect(xT-6, yT+292, 100, yTextSpacer);
c.fillStyle = "#FFFB1E"; c.fillRect(xT+302, yT+292, 70, yTextSpacer);
c.fillStyle = "#FFFB1E"; c.fillRect(xT-6, yT+318, 383, yTextSpacer);
c.fillStyle = "#FFFB1E"; c.fillRect(xT-6, yT+344, 110, yTextSpacer);
c.fillStyle = "#FFFB1E"; c.fillRect(xT+272, yT+396, 90, yTextSpacer);
c.fillStyle = "#FFFB1E"; c.fillRect(xT-6, yT+422, 226, yTextSpacer);

// Header text
c.font = "20px Arial";
c.fillStyle = "black";
c.fillText("Air Force completes first flight test of", xT, yH);
c.fillText("Valkyrie unmanned fighter jet", xT, yH + yHeaderSpacer);

//Air Force completes first flight test of Valkyrie unmanned fighter jet

c.font = "20px Arial";
c.fillStyle = "black";
c.fillText("The XQ-58A Valkyrie, a jet-powered drone", xT, yT);
c.fillText("designed to fly alongside manned fighter", xT, yT+1*yTextSpacer);
c.fillText("jets and navigate autonomously, comple-", xT, yT+2*yTextSpacer);
c.fillText("ted its first test flight. ", xT, yT+3*yTextSpacer);
c.fillText("The flight test is a major step forward for", xT, yT+4*yTextSpacer);
c.fillText("an experimental “loyal wingman” concept", xT, yT+5*yTextSpacer);
c.fillText("that envisions small robotic drones ac-", xT, yT+6*yTextSpacer);
c.fillText("companying fighter jets into combat,", xT, yT+7*yTextSpacer);
c.fillText("scouting ahead or absorbing enemy fire.", xT, yT+8*yTextSpacer);
c.fillText("It aligns with the Pentagon’s increasing", xT, yT+9*yTextSpacer);
c.fillText("focus on competing with China and Russia", xT, yT+10*yTextSpacer);
c.fillText("for military dominance.", xT, yT+11*yTextSpacer);
c.fillText("San Diego-based company called Kratos", xT, yT+12*yTextSpacer);
c.fillText("Defense and Security Solutions to develop", xT, yT+13*yTextSpacer);
c.fillText("the Valkyrie. Boeing expects it to achieve", xT, yT+14*yTextSpacer);
c.fillText("its first flight next year.", xT, yT+15*yTextSpacer);
c.fillText("The Valkyrie has an estimated unit cost", xT, yT+16*yTextSpacer);
c.fillText("of $2 million to $3 million, close to cost of", xT, yT+17*yTextSpacer);
c.fillText("antiaircraft missiles that enemies would fire", xT, yT+18*yTextSpacer);

c.font = "14px Arial";
c.fillStyle = "white";
c.fillText("March 6, 2019", x2-90, y2+14);
c.fillText("www.washingtonpost.com", x1+1, y2+14);

//The XQ-58A Valkyrie, a jet-powered drone designed to fly alongside manned fighter jets and navigate autonomously, completed its first test flight Tuesday at Yuma Proving Grounds in Arizona, according to an Air Force announcement and video released Wednesday.

//The flight test is a major step forward for an experimental “loyal wingman” concept that envisions small robotic drones accompanying fighter jets into combat, scouting ahead or absorbing enemy fire. Military experts have suggested such systems would be useful in a war between two rival nations, something that aligns with the Pentagon’s increasing focus on competing with China and Russia for military dominance.

//The Pentagon has yet to commit to the idea. But the Air Force Research Laboratory is among several military agencies dabbling in such technology, partnering with a San Diego-based company called Kratos Defense and Security Solutions to develop the Valkyrie.

//Chicago-based aerospace giant Boeing introduced its own “loyal wingman” prototype drone last month at a trade show in Australia, according to the trade publication Defense News. It expects its variant to achieve its first flight next year.

//[The Pentagon is building robotic wingmen to fly alongside fighter planes]

//The Valkyrie has an estimated unit cost of $2 million to $3 million, something that is intended to give it a similar cost profile to the antiaircraft missiles that enemies would theoretically fire at it. And it is distinct from prevailing U.S. drone models such as the MQ-9 Reaper in that it is jet-powered and can fly at near-supersonic speeds, which could enable it to keep pace with an F-16 or F-35 fighter jet.

//The Valkyrie “is the first example of a class of [drone] that is defined by low procurement and operating costs while providing game changing combat capability,” Air Force Research Lab program manager Doug Szczublewski said in a statement.

//[A key U.S. ally is close to adding swarming attack drones to its military arsenal]

//The test is also a major step forward for Kratos, the Valkyrie’s manufacturer. Kratos already does a steady business with the U.S. military for small drones the military uses for target practice in training exercises. And it has been trying to break into the much larger military fighter jet market that is dominated by Lockheed Martin, Boeing and Northrop Grumman.

//Kratos chief executive Eric DeMarco said in a call with investors late last month that a successful initial flight test for the Valkyrie would be “one of the most significant milestones in Kratos’ history."

//“We also see 2019 as the year that Kratos is established as the world leader in the high performance unmanned aerial drone system product class that we’re in, which we see as a multibillion-dollar opportunity for our company,” DeMarco said.

//Clarification: The XQ-58A Valkyrie is designed to accompany fighter jets at “high-subsonic” speeds, not supersonic. This article has been updated.






// Left Menu

// White rectangle
c.fillStyle = menuColor;
c.fillRect(0, 0, menuWidth, yMenu);

var j = 43;
var k = 22;
c.font = "18px Arial";
c.fillStyle = "black";
c.fillText("Boeing", 0+5, menuYDivisions*(2-1)+j);
c.fillText("Kratos", 0+5, menuYDivisions*(2-1)+j+1*k);
c.fillText("Nortrop Grumman", 0+5, menuYDivisions*(2-1)+j+2*k);
c.fillText("Halliburton", 0+5, menuYDivisions*(2-1)+j+3*k);
c.fillText("Carlyle", 0+5, menuYDivisions*(2-1)+j+4*k);
c.fillText("Lockheed Martin", 0+5, menuYDivisions*(2-1)+j+5*k);

c.fillText("Toups, Charles", 0+5, menuYDivisions*(1-1)+j+0*k);
c.fillText("Muilenburg, Dennis", 0+5, menuYDivisions*(1-1)+j+1*k);
c.fillText("DeMarco, Eric", 0+5, menuYDivisions*(1-1)+j+2*k);
c.fillText("Rubinstein, David", 0+5, menuYDivisions*(1-1)+j+3*k);
c.fillText("Warden, Kathy", 0+5, menuYDivisions*(1-1)+j+4*k);
c.fillText("Novakovic, Phebe", 0+5, menuYDivisions*(1-1)+j+5*k);
 
c.fillText("San Diego, CA", 0+5, menuYDivisions*(3-1)+j);
c.fillText("Baghdad", 0+5, menuYDivisions*(3-1)+j+1*k);
c.fillText("Kabul", 0+5, menuYDivisions*(3-1)+j+2*k);
c.fillText("Doha", 0+5, menuYDivisions*(3-1)+j+3*k);
c.fillText("Norfolk, VA", 0+5, menuYDivisions*(3-1)+j+4*k);
c.fillText("Istanbul", 0+5, menuYDivisions*(3-1)+j+5*k);

c.fillText("Turkey", 0+5, menuYDivisions*(4-1)+j);
c.fillText("Qatar", 0+5, menuYDivisions*(4-1)+j+1*k);
c.fillText("Afghanistan", 0+5, menuYDivisions*(4-1)+j+2*k);
c.fillText("Iraq", 0+5, menuYDivisions*(4-1)+j+3*k);
c.fillText("United States", 0+5, menuYDivisions*(4-1)+j+4*k);
c.fillText("Iran", 0+5, menuYDivisions*(4-1)+j+5*k);

c.fillText("XQ-58A Valkyrie", 0+5, menuYDivisions*(5-1)+j);
c.fillText("F-22 Raptor", 0+5, menuYDivisions*(5-1)+j+1*k);
c.fillText("X-48B Orbiter", 0+5, menuYDivisions*(5-1)+j+2*k);
c.fillText("M-11 Sentinel", 0+5, menuYDivisions*(5-1)+j+3*k);
c.fillText("MQ-19 Reaper", 0+5, menuYDivisions*(5-1)+j+4*k);
c.fillText("J-11 Dragon", 0+5, menuYDivisions*(5-1)+j+5*k);

c.fillText("Loyal Wingman", 0+5, menuYDivisions*(6-1)+j);
c.fillText("Offensive Swarm", 0+5, menuYDivisions*(6-1)+j+1*k);
c.fillText("Eye In The Sky", 0+5, menuYDivisions*(6-1)+j+2*k);
c.fillText("Dead Man's Hand", 0+5, menuYDivisions*(6-1)+j+3*k);
c.fillText("Quantum Cypher", 0+5, menuYDivisions*(6-1)+j+4*k);
c.fillText("Situational Awareness", 0+5, menuYDivisions*(6-1)+j+5*k);


// Left grey rectangles 
for (i = 1; i < (menuVerticalDivisionsNumber+1); i++)  {
    c.fillStyle = headerColor;
    c.fillRect(0, menuYDivisions*(i-1), menuWidth, menuClassesYWidth);
}

// Drawing vertical divisions of left menu
c.beginPath();
c.moveTo(menuWidth, 0);
c.lineTo(menuWidth, yMenu);
c.lineWidth = menuFrameWidth;
c.strokeStyle = menuFrameColor;
// can be "#fa34a3", rgba(), text value, any css.
c.stroke();

for (i = 1; i < (menuVerticalDivisionsNumber+1); i++)  {
    c.moveTo(0, menuYDivisions*(i-1)+0.5);
    c.lineTo(menuWidth, menuYDivisions*(i-1)+0.5);
    c.moveTo(0, menuYDivisions*(i-1)+menuClassesYWidth+0.5);
    c.lineTo(menuWidth, menuYDivisions*(i-1)+menuClassesYWidth+0.5);
}

c.lineWidth = menuFrameWidthSecondary;
c.strokeStyle = menuFrameColor;
// can be "#fa34a3", rgba(), text value, any css.
c.stroke();

c.font = "16px Arial";
c.fillStyle = menuTextColor;
c.fillText("Person:", menuTextXShift, 0 * menuYDivisions+menuTextYShift);
c.fillText("Company:", menuTextXShift, 1 * menuYDivisions+menuTextYShift);
c.fillText("City:", menuTextXShift, 2 * menuYDivisions+menuTextYShift);
c.fillText("Country:", menuTextXShift, 3 * menuYDivisions+menuTextYShift);
c.fillText("Project:", menuTextXShift, 4 * menuYDivisions+menuTextYShift);
c.fillText("Concept:", menuTextXShift, 5 * menuYDivisions+menuTextYShift);







