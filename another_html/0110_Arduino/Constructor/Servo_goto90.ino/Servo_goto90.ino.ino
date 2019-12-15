/* Servo GoTo 90 for Continuous servo rotation mod
   Arduino IDE program
   www.arduino.cc

   Written 12 Dec 2015
   by Nick Grigoryev
   mob. 619-551-0828
   email nikgrigoryev@gmail.com
*/

#include <Servo.h>                 // includes code of "Servo library", to use servo functions

Servo servo;                       // creates servo object to control a servo                           

  int pos = 90;                    // variable to store the servo position

void setup() 
  {
  servo.attach(9);                 // attaches the Servo1 on pin 9 of Arduino
  Serial.begin(9600);              // begins communication with PC via serial port, speed 9600 bod
  }

void loop() 
  {                                // main program loop
        servo.write(pos);
        delay(15); 
        Serial.println(pos);       // prints to serial port the position of servo
  }

