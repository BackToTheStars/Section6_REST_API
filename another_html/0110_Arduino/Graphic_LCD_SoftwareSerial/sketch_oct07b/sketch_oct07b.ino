/*#include <SoftwareSerial.h>
                                 
SoftwareSerial mySerial(4, 5);              // Connect device Rx - 4, Tx - 5

void setup() {
  Serial.begin(9600);                       // This will communicate with PC via USB
  mySerial.begin(9600);                     // This will communicate with device via pins 4, 5 with 9600 baud rate
}

void loop() {
    Serial.println(" Hello World ");        // Sends string to PC to Serial Monitor
    mySerial.println(" Hello World ");      // Sends string to device
    delay(500);                             // Waits here 500ms and then goes on
}
*/

//  *
//  * ------------
//  *  Control a Serial LCD Display
//  *  
//  *  Tested on a Matrix Orbital model LCD0821 display.
//  *  Other diplays will work but may have slightly different 
//  *  command codes and hardware setups. 
//  *   
//  *  Copyleft 2006 by djmatic
//  *  Updated to be Arduino 1.0 compatible by Dave Hrynkiw, Solarbotics
//  *  July 17 2013
//  *  
//  *   ------------
//  *
//  *


// Declare your program variables here

// Arduino and LCD setup 

void setup()
{
  Serial.begin(250000); // era beginSerial


//       LCD setup commands: uncomment the ones you want to use
//       Note: These codes (i.e. the ones following 254) may have to be changed for 
//       different manufacturer's displays

//       Turn Auto scroll ON
//         Serial.write(254);
//         Serial.write(81);     
//       
//       Turn Auto scroll OFF
//         Serial.write(254);
//         Serial.write(82); 

//       Turn ON AUTO line wrap
//         Serial.write(254); 
//         Serial.write(67);              

//       Turn OFF AUTO line wrap
//         Serial.write(254); 
//         Serial.write(68); 

//       Turn OFF the block cursor    
//       Note that setting both block and underline 
//       cursors may give unpredictable results. 
           Serial.write(254);
           Serial.write(84);               

//       Turn ON the block cursor
//         Serial.write(254);
//         Serial.write(83);  

//       Turn ON the underline cursor
//         Serial.write(254);
//         Serial.write(74);               

//       Turn OFF the underline cursor
//         Serial.write(254);
//         Serial.write(75);               
}

//  MAIN CODE

void loop()
{ 
  //backlightOn(0);  // turn the backlight on all the time

  clearLCD();
  Serial.write(" Hello");  // print text to the current cursor position
  newLine();               // start a new line
  Serial.write("Arduino");
  delay(1000);
}

//  LCD  FUNCTIONS-- keep the ones you need. 

// clear the LCD
void clearLCD(){
  Serial.write(12);
}


// start a new line
void newLine() { 
  Serial.write(10); 
}


// move the cursor to the home position
void cursorHome(){
  Serial.write(254);
  Serial.write(72);
}


// move the cursor to a specific place
// e.g.: cursorSet(3,2) sets the cursor to x = 3 and y = 2
void cursorSet(int xpos, int ypos){  
  Serial.write(254);
  Serial.write(71);               
  Serial.write(xpos);   //Column position   
  Serial.write(ypos); //Row position 
} 


// backspace and erase previous character
void backSpace() { 
  Serial.write(8); 
}


// move cursor left
void cursorLeft(){    
  Serial.write(254); 
  Serial.write(76);   
}


// move cursor right
void cursorRight(){
  Serial.write(254); 
  Serial.write(77);   
}


// set LCD contrast
void setContrast(int contrast){
  Serial.write(254); 
  Serial.write(80);   
  Serial.write(contrast);   
}


// turn on backlight
void backlightOn(int minutes){
  Serial.write(254); 
  Serial.write(66);   
  Serial.write(minutes); // use 0 minutes to turn the backlight on indefinitely   
}


// turn off backlight
void backlightOff(){
  Serial.write(254); 
  Serial.write(70);   
}
