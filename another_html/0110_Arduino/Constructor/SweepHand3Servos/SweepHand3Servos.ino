
#include <Servo.h>

Servo servoFingers;                        // create servo object to control a servo
Servo servoForearm;                        // twelve servo objects can be created on most boards
Servo servoShoulder;

int posShoulderWas = 146;
int posShoulderNow = 146;

int posForearmWas = 5;
int posForearmNow = 5;

int posFingersWas = 40;
int posFingersNow = 40; 

void setup() 
{
  servoFingers.attach(6);                  // attaches the servos on pins 6, 4, 5 to the servo objects
  servoForearm.attach(4);
  servoShoulder.attach(5);

  Serial.begin(9600);                      // initialize the serial communication:

  servoShoulder.write(posShoulderNow);
  servoForearm.write(posForearmNow);
  servoFingers.write(posFingersNow);
}

void moveForearmServo(int startPos, int finishPos, int timing)
{
   if (finishPos > startPos)
   {
      for (int i = startPos; i <= finishPos; i += 1)    
      {                                    
         servoForearm.write(i);
         delay(timing);                        
      }
   }
   if (finishPos < startPos) 
   {   
      for (int i = startPos; i >= finishPos; i -= 1) 
      {  
         servoForearm.write(i);   
         delay(timing);                          
      }
   }
}

void moveShoulderServo(int startPos, int finishPos, int timing)
{
   if (finishPos > startPos)
   {
      for (int i = startPos; i <= finishPos; i += 1)    
      {                                    
         servoShoulder.write(i);
         delay(timing);                        
      }
   }
   if (finishPos < startPos) 
   {   
      for (int i = startPos; i >= finishPos; i -= 1) 
      {  
         servoShoulder.write(i);   
         delay(timing);                          
      }
   }
}

void moveFingersServo(int startPos, int finishPos, int timing)
{
   if (finishPos > startPos)
   {
      for (int i = startPos; i <= finishPos; i += 1)    
      {                                    
         servoFingers.write(i);
         delay(timing);                        
      }
   }
   if (finishPos < startPos) 
   {   
      for (int i = startPos; i >= finishPos; i -= 1) 
      {  
         servoFingers.write(i);   
         delay(timing);                          
      }
   }
}

void loop() 
{

   Serial.print("Enter forearm position ");
   while (Serial.available()==0) { }        // look if user entered anything
   posForearmNow = Serial.parseInt();       // warning this is integer parsing
   moveForearmServo(posForearmWas, posForearmNow, 30);
   Serial.println(posForearmWas + ' ' + posForearmNow);
   posForearmWas = posForearmNow;


   Serial.print("Enter shoulder position ");
   while (Serial.available()==0) { }       // look if user entered anything
   posShoulderNow = Serial.parseInt();     // warning this is integer parsing
   moveShoulderServo(posShoulderWas, posShoulderNow, 30);
   Serial.println(posShoulderWas + ' ' + posShoulderNow);
   posShoulderWas = posShoulderNow;

   Serial.print("Enter fingers position ");
   while (Serial.available()==0) { }         // look if user entered anything
   posFingersNow = Serial.parseInt();        // warning this is integer parsing
   moveFingersServo(posFingersWas, posFingersNow, 15);
   Serial.println(posFingersNow);
   posFingersWas = posFingersNow;
   Serial.println();
   
}

