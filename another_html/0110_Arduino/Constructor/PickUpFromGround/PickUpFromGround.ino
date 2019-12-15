
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

void moveForearm(int startPos, int finishPos, int timing, int seconds)
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
   delay(seconds);
}

void moveShoulder(int startPos, int finishPos, int timing, int seconds)
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
   delay(seconds);
}

void moveFingers(int startPos, int finishPos, int timing, int seconds)
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
   delay(seconds);
}

void loop() 
{
   delay(5000);
   
                                               moveForearm(5, 45, 30, 500);  
   moveShoulder(146, 84, 30, 500);  
                                                                                         moveFingers(40, 73, 15, 1000);    
                                               moveForearm(45, 36, 40, 1500);  
                                                                                         moveFingers(73, 40, 40, 1000);   
                                               moveForearm(36, 50, 40, 1500);  
   moveShoulder(84, 105, 30, 500);
                                               moveForearm(50, 31, 45, 500);   
   moveShoulder(105, 146, 45, 300); 
                                               moveForearm(31, 5, 45, 300);     
}








