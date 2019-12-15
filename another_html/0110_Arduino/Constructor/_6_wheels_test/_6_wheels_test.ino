/* 6 wheels platform test rotation
   Arduino IDE program
   www.arduino.cc

   Written 18 Dec 2015
   by Nick Grigoryev
   email nikgrigoryev@gmail.com
*/

#include <Servo.h>                 // includes code of "Servo library", to use servo functions

Servo servo1;                      // creates servo object to control a servo        
Servo servo2;                      // right - 1, 2, 3 pin, starting from head 
Servo servo3;                      // left - 4, 5, 6 pin, starting from head
Servo servo4;
Servo servo5;
Servo servo6;                   

  int pos_Right = 90;               // variable to store the servos position, left side
  int pos_Left = 90;              // right side

void setup() 
  {
  servo1.attach(2);                // attaches the servo1 on pin 9 of Arduino
  servo2.attach(3);
  servo3.attach(4);
  servo4.attach(5);
  servo5.attach(6);
  servo6.attach(7);
  
  Serial.begin(9600);              // begins communication with PC via serial port, speed 9600 bod
  }

void loop() 
  {                                // main program loop
        pos_Right = 180;
        pos_Left = 0;
        servo1.write(pos_Right);
        servo2.write(pos_Right);
        servo3.write(pos_Right);
        servo4.write(pos_Left);
        servo5.write(pos_Left);
        servo6.write(pos_Left);
        Serial.println(pos_Right);       // prints to serial port the position of servo
        Serial.println(pos_Left);
        Serial.println();
        delay(5000); 

        pos_Right = 0;
        pos_Left = 180;
        servo1.write(pos_Right);
        servo2.write(pos_Right);
        servo3.write(pos_Right);
        servo4.write(pos_Left);
        servo5.write(pos_Left);
        servo6.write(pos_Left);
        Serial.println(pos_Right);       
        Serial.println(pos_Left);
        Serial.println();
        delay(5000); 

        pos_Right = 95;                  // +5
        pos_Left = 85;
        servo1.write(pos_Right);
        servo2.write(pos_Right);
        servo3.write(pos_Right);
        servo4.write(pos_Left);
        servo5.write(pos_Left);
        servo6.write(pos_Left);
        Serial.println(pos_Right);       
        Serial.println(pos_Left);
        Serial.println();
        delay(5000); 

        pos_Right = 105;                 // +15
        pos_Left = 75;
        servo1.write(pos_Right);
        servo2.write(pos_Right);
        servo3.write(pos_Right);
        servo4.write(pos_Left);
        servo5.write(pos_Left);
        servo6.write(pos_Left);
        Serial.println(pos_Right);       
        Serial.println(pos_Left);
        Serial.println();
        delay(5000); 

        pos_Right = 90;                  // 0
        pos_Left = 90;
        servo1.write(pos_Right);
        servo2.write(pos_Right);
        servo3.write(pos_Right);
        servo4.write(pos_Left);
        servo5.write(pos_Left);
        servo6.write(pos_Left);
        Serial.println(pos_Right);       
        Serial.println(pos_Left);
        Serial.println();
        delay(5000);

         
        pos_Right = 100;                 // +10
        pos_Left = 80;
        servo1.write(pos_Right);
        servo2.write(pos_Right);
        servo3.write(pos_Right);
        servo4.write(pos_Left);
        servo5.write(pos_Left);
        servo6.write(pos_Left);
        Serial.println(pos_Right);       
        Serial.println(pos_Left);
        Serial.println();
        delay(5000); 

        pos_Right = 115;                 // +25
        pos_Left = 65;
        servo1.write(pos_Right);
        servo2.write(pos_Right);
        servo3.write(pos_Right);
        servo4.write(pos_Left);
        servo5.write(pos_Left);
        servo6.write(pos_Left);
        Serial.println(pos_Right);       
        Serial.println(pos_Left);
        Serial.println();
        delay(5000); 
        
        pos_Right = 110;                 // +20
        pos_Left = 70;
        servo1.write(pos_Right);
        servo2.write(pos_Right);
        servo3.write(pos_Right);
        servo4.write(pos_Left);
        servo5.write(pos_Left);
        servo6.write(pos_Left);
        Serial.println(pos_Right);       
        Serial.println(pos_Left);
        Serial.println();
        delay(5000); 

        pos_Right = 0;                   // full speed поворот
        pos_Left = 0;
        servo1.write(pos_Right);
        servo2.write(pos_Right);
        servo3.write(pos_Right);
        servo4.write(pos_Left);
        servo5.write(pos_Left);
        servo6.write(pos_Left);
        Serial.println(pos_Right);       
        Serial.println(pos_Left);
        Serial.println();
        delay(5000); 

        pos_Right = 180;                 // full speed turn counterclockwise
        pos_Left = 180;
        servo1.write(pos_Right);
        servo2.write(pos_Right);
        servo3.write(pos_Right);
        servo4.write(pos_Left);
        servo5.write(pos_Left);
        servo6.write(pos_Left);
        Serial.println(pos_Right);       
        Serial.println(pos_Left);
        Serial.println();
        delay(5000); 
  }

