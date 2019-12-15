/* CHAOTIC MOVEMENT OF ROBOT HAND
   Arduino IDE program
   www.arduino.cc

   Written 12 Dec 2015
   by Nick Grigoryev
   mob. 619-551-0828
   email nikgrigoryev@gmail.com
*/

#include <Servo.h>                 // includes code of "Servo library", to use servo functions

Servo servo1;                      // creates servo object to control a servo                           
Servo servo2;                      // minimum twelve servo objects can be created on most boards

  int pos1 = 0;                    // variable to store the Servo1 position
  int pos2 = 0;                    // variable to store the Servo2 position
  int m = 0;                       // lower range border for Servo1, to prevent hand braking out of movement envelope (left side)
  int n = 0;                       // upper range border for Servo2, to prevent hand braking out of movement envelope (right side)
  int t = 0;                       // random time between robot hand movements
  int pos1hold = 90;
  int pos2hold = 90;

void setup() 
  {
  servo1.attach(9);                // attaches the Servo1 on pin 9 of Arduino
  servo2.attach(8);                // attaches the Servo2 on pin 8 of Arduino
  Serial.begin(9600);              // begins communication with PC via serial port, speed 9600 bod
  }

void loop() 
  {                                // main program loop
  
  m = 30;                          // left border of movement for Servo1
  n = 160;                         // right border of movement for Servo2
  pos2 = random(2, 181);           // choose random position for Servo2
  if (pos2 <=68) { m = 55; }       // check 2 conditions when robot hand can break (going out of reach envelope)
  if (pos2 >=90) { n = 90; }       // if out of envelope, change borders for Servo 1
  pos1 = random(m, n);             // choose random position of Servo1
  Serial.println(pos2);            // prints to serial port new position of Servo2
  while (pos2hold != pos2)         // smooth movement to a new position
     {
     if (pos2hold > pos2) {
        servo2.write(pos2hold);
        pos2hold = pos2hold - 1;
        delay(15); 
        }
     if (pos2hold < pos2) {
        servo2.write(pos2hold);
        pos2hold = pos2hold+1;
        delay(10);
        }
     }
  delay(50);

  Serial.println(pos1);            // prints to serial port new position of Servo1
  while (pos1hold != pos1)         // smooth movement to a new position
     {
     if (pos1hold > pos1) {
        servo1.write(pos1hold);
        pos1hold = pos1hold - 1;
        delay(25); 
     }
     if (pos1hold < pos1) {
        servo1.write(pos1hold);
        pos1hold = pos1hold+1;
        delay(18);
     }
  }
  t = random(800, 5000);           // choose random time from 0.8 of a second to 5 seconds between movements
  delay(t);                        // wait this random time
  
  }

