/* Continuous servo rotation mod, go from 0 to 180, then back
   Arduino IDE program
   www.arduino.cc

   Written 12 Dec 2015
   by Nick Grigoryev
   mob. 619-551-0828
   email nikgrigoryev@gmail.com
*/

#include <Servo.h>                 // includes code of "Servo library", to use servo functions

Servo servo;                       // creates servo object to control a servo                           

  int pos = 0;                     // variable to store the servo position

void setup() 
  {
  servo.attach(9);                 // attaches the Servo1 on pin 9 of Arduino
  Serial.begin(9600);              // begins communication with PC via serial port, speed 9600 bod
  }

void loop()                        // main program loop
  {      
      for (int i = 0; i <=180; i=i+5) {
        servo.write(i);
        delay(1000); 
        Serial.println(i);       // prints to serial port the position of servo
      }  
      for (int i = 180; i >= 0; i=i-5) {
        servo.write(i);
        delay(1000); 
        Serial.println(i);       // prints to serial port the position of servo
      }  
  }

