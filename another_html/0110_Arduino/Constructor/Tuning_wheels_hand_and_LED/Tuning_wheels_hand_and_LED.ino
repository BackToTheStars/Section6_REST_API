// TO DO LIST

//  1. Complete the function of moving the hand servos altogether
//
//  



void changeSpeedOfWheels();
void moveArm();
void moveForearm();
void moveShoulder();
void moveFingers();
void buzz();
void setup();
void loop();

// void turnOnPoint();
// void turnWhileRunning();

#include <Servo.h>                    // includes code of "Servo library", to use servo functions
#include <LiquidCrystal_I2C.h>        // standard library to manage LCDs
#include <Wire.h>                     // library to manage I2C devices

   LiquidCrystal_I2C lcd(0x27,20,4);  // create object "lcd" on address 0x27 for a 20 chars and 4 line display

   Servo servo1;                      // creates servo object to control a servo        
   Servo servo2;                      // right - 4, 5, 6 pin, starting from head 
   Servo servo3;                      // left - 7, 8, 9 pin, starting from head
   Servo servo4;
   Servo servo5;
   Servo servo6;   
   
   Servo servoFingers;                // create servo object to control a servo
   Servo servoForearm;                // twelve servo objects can be created on most boards
   Servo servoShoulder;

   Servo frontRadar;
   Servo backRadar;

   int led1pin = 42;
   int led2pin = 43;
   int led3pin = 44;
   int led4pin = 45;
   int frontRadarPin = A0;
   int backRadarPin = A1;
   int buzzerPin = 10;                  // Defines buzzer pin

// ************  Front Radar Variables, stop & movement markers *********************************************
  int frontDistance[180];                     // Declare massive for front semicircles
  int takeMeasurement[25];                    // Declare service massive for measurements 
  int frontRadarBeginAngle = 45;
  int frontRadarEndAngle = 145;
  int frontRadarCalibrationAngle = -3; // Servo calibration angle to be at 90 degrees
  int frontRadarDirectionMarker = 0;   // Defines to make measurement from right to left, or in reverse
  int obstacleDistanceLimit = 160;     // Defines how close we want to avoid obstacles
  int obstacleLeftLimit = 45;          // Defines the coridor where rover can still move between obstacles;
  int obstacleRightLimit = 135; 
  int mainMovementSpeed = 7;          // Defines at what speed rover is moving during the main program
  int movementMarker = 0;              // Defines, if the rover currently moves



void setup() 
  {

  servo1.attach(26);                   // attaches the servo1 on pin 4 of Arduino
  servo2.attach(27);
  servo3.attach(28);
  servo4.attach(22);
  servo5.attach(23);
  servo6.attach(24);

  servoFingers.attach(35);            // attaches the servos on pins 6, 4, 5 to the servo objects
  servoForearm.attach(36);
  servoShoulder.attach(37);

  frontRadar.attach(5);
  backRadar.attach(7);
  
  pinMode(led1pin, OUTPUT);           // initialize led pins as an outputs.
  pinMode(led2pin, OUTPUT); 
  pinMode(led3pin, OUTPUT);
  pinMode(led4pin, OUTPUT);
  pinMode(frontRadarPin, INPUT);
  pinMode(backRadarPin, INPUT);
  pinMode(buzzerPin, OUTPUT);

  Serial.begin(9600);                 // begins communication with PC via serial port, speed 115200 bod
  Wire.begin();                       // not sure what is this, may be I2C
  lcd.begin();                        // initialize the lcd 
  
  digitalWrite(led1pin, HIGH);
  digitalWrite(led2pin, HIGH);
  digitalWrite(led3pin, HIGH);
  digitalWrite(led4pin, HIGH);

  servo1.write(90);
  servo2.write(90);                    
  servo3.write(90);   
  servo4.write(90);
  servo5.write(111);                   // tuning for this servo to stop at 90 is +21
  servo6.write(91);                    // tuning for this servo to stop at 90 is +1

  frontRadar.write(87);                // 87 calibrated
  backRadar.write(90);                 // 90 calibrated
  
  int posShoulderWas = 156;
  int posShoulderNow = 156;
  int posForearmWas = 0;
  int posForearmNow = 0;
  int posFingersWas = 179;
  int posFingersNow = 179; 

  servoShoulder.write(posShoulderNow);                      // 156 calibrated
  servoForearm.write(posForearmNow);                        // 0   calibrated
  servoFingers.write(posFingersNow);                        // 179  closed, 136 open, calibrated
  delay(2000);

  // TEST LCD  *********************************************************************************************
  lcd.backlight();                                          // turns on backlight
  lcd.clear();                                              // clears LCD
  lcd.setCursor(0,0);                                       // takes cursor to position 1 of line 2
  lcd.print("Hello! Power is on.");
  buzz(buzzerPin, 1900, 200, 400);                          // format: buzz at 2100 Hz for 300 milliseconds, delay after 150 milliseconds
  delay(3000);

/*
  
  lcd.setCursor(0,1);
  lcd.print("I begin diagnostics.");

  // BUZZER TEST  ***********************************************************************
  
  buzz(buzzerPin, 1900, 200, 400);                          // format: buzz at 2100 Hz for 300 milliseconds, delay after 150 milliseconds

  // HAND MOVING TEST, SLOW PART  *******************************************************
                                       
                                       moveForearm( 0, 68, 40, 500); 
  moveShoulder(156, 90, 40, 500);
                                                                     moveFingers(179, 136, 40, 400);
                                                                     moveFingers(136, 179, 40, 400);
  moveShoulder(90, 156, 40, 500);

                                       moveForearm(68,  0, 40, 1000); 
                                       
  // HAND MOVING TEST FAST PART  ********************************************************
                                       moveForearm( 0, 70, 1, 0); 
  moveShoulder(156, 90, 1, 1000);
                                                                     moveFingers(179, 136, 1, 100);
                                                                     moveFingers(136, 179, 1, 300);
                                                                     moveFingers(179, 136, 1, 100);
                                                                     moveFingers(136, 179, 1, 500);
  moveShoulder(90, 156, 1, 0);

                                       moveForearm(70,  0, 1, 700); 
                                      
  buzz(buzzerPin, 1900, 200, 200);                          // format: buzz at 2100 Hz for 300 milliseconds, delay after 150 milliseconds
  lcd.setCursor(0,2);                                       // takes cursor to position 1 of line 2
  lcd.print("Hand works good.");
  delay(1000);

  // END OF HAND TEST  ******************************************************************

 

  // Radar massives creation  **************************************************

  int frontDistance[179];                   // Declare 2 massives for front and back semicircles
  int backDistance[179];
  int takeMeasurement[499];

  for (int i = 0; i <= 179; i++)            // Initialize both massives with zeros
  {
     frontDistance[i] = 0;
     backDistance[i] = 0;
  }
    
  // TEST OF FRONT AND REAR RADAR SERVOS****************************************
  // Front radar ***************************************************************
  
  frontRadar.write(41);                    // 87 calibrated
  delay(600);
  
  for (int i = 41; i <= 149; i++)
  {  
     frontRadar.write(i-3);                // 87 calibrated
     long sum = 0;
     for (int j = 0; j <= 499; j++) {
        takeMeasurement[j] = analogRead(frontRadarPin);
        sum = sum + takeMeasurement[j];
        delay(0);
     }
     frontDistance[i] = sum / 500;
     Serial.print(frontDistance[i]);
     Serial.print(' ');
     delay(1);
  }
  delay(800);
  for (int i = 149; i >= 41; i--)
  {
     frontRadar.write(i-3);                // 87 calibrated
     delay(15);
  }
  delay(1400);
  frontRadar.write(87);                    // 87 calibrated
  delay(500);
  buzz(buzzerPin, 1900, 200, 200);         // format: buzz at 2100 Hz for 300 milliseconds, delay after 150 milliseconds
  delay(1200);
  
  // Back radar ***************************************************************
  backRadar.write(1);
  delay(600);
  for (int i = 1; i <= 180; i++)
  {
     backRadar.write(i);                   // 90 calibrated
     delay(15);
  }
  delay(800);
  for (int i = 180; i >= 0; i--)
  {
     backRadar.write(i);                   // 90 calibrated
     delay(15);
  }
  delay(1200);
  backRadar.write(90);                     // 90 calibrated
  delay(500);
  lcd.setCursor(0,3);                                       // takes cursor to position 1 of line 2
  lcd.print("Radars work good.");
  buzz(buzzerPin, 1900, 200, 200);                          // format: buzz at 2100 Hz for 300 milliseconds, delay after 150 milliseconds
  
  // END OF RADARS TEST  ***********************************************************************************

  // WHEELS TEST  ******************************************************************************************

         // Go slowly back 1.5 sec
         changeSpeedOfWheels(-3, -3, -3, -3, 25, 1500);        // (A1_-70-0+70, A2_-70-0+70, B1_same, B2_same, stepTime_mSec, cycleTime_mSec); 
         // Stop 0,3 sec
         changeSpeedOfWheels(-3, 0, -3, 0, 25, 300);        // (A1_-70-0+70, A2_-70-0+70, B1_same, B2_same, stepTime_mSec, cycleTime_mSec); 

         delay(1800);
         
         // Go slowly forward 1,5 sec
         changeSpeedOfWheels(3, 3, 3, 3, 25, 1500);      // (A1_-70-0+70, A2_-70-0+70, B1_same, B2_same, stepTime_mSec, cycleTime_mSec); 
         // Stop 0,3 sec
         changeSpeedOfWheels(3, 0, 3, 0, 25, 300);      // (A1_-70-0+70, A2_-70-0+70, B1_same, B2_same, stepTime_mSec, cycleTime_mSec);       
         buzz(buzzerPin, 1900, 200, 200);                   // format: buzz at 2100 Hz for 300 milliseconds, delay after 150 milliseconds
         delay(1800);


         // Go fast forward 0,5 sec
         changeSpeedOfWheels(70, 70, 70, 70, 25, 500);        // (A1_-70-0+70, A2_-70-0+70, B1_same, B2_same, stepTime_mSec, cycleTime_mSec); 
         // Stop 0,3 sec
         changeSpeedOfWheels(70, 0, 70, 0, 25, 300);        // (A1_-70-0+70, A2_-70-0+70, B1_same, B2_same, stepTime_mSec, cycleTime_mSec); 

         delay(100);
         
         // Go fast back 0,5 sec
         changeSpeedOfWheels(-70, -70, -70, -70, 25, 500);      // (A1_-70-0+70, A2_-70-0+70, B1_same, B2_same, stepTime_mSec, cycleTime_mSec); 
         // Stop 0,3 sec
         changeSpeedOfWheels(-70, 0, -70, 0, 25, 300);      // (A1_-70-0+70, A2_-70-0+70, B1_same, B2_same, stepTime_mSec, cycleTime_mSec);       
         buzz(buzzerPin, 1900, 200, 200);                   // format: buzz at 2100 Hz for 300 milliseconds, delay after 150 milliseconds
         delay(2200);

         // Turn left 2.8 sec
         changeSpeedOfWheels(-70, -70, 70, 70, 25, 2800);        // (A1_-70-0+70, A2_-70-0+70, B1_same, B2_same, stepTime_mSec, cycleTime_mSec); 
         // Stop 0,2 sec
         changeSpeedOfWheels(-70, 0, 70, 0, 25, 200);        // (A1_-70-0+70, A2_-70-0+70, B1_same, B2_same, stepTime_mSec, cycleTime_mSec); 

         delay(1000);
         
         // Turn right 2.8 sec
         changeSpeedOfWheels(70, 70, -70, -70, 25, 2800);      // (A1_-70-0+70, A2_-70-0+70, B1_same, B2_same, stepTime_mSec, cycleTime_mSec); 
         // Stop 0,2 sec
         changeSpeedOfWheels(70, 0, -70, 0, 25, 200);      // (A1_-70-0+70, A2_-70-0+70, B1_same, B2_same, stepTime_mSec, cycleTime_mSec);       
         buzz(buzzerPin, 1900, 200, 200);                   // format: buzz at 2100 Hz for 300 milliseconds, delay after 150 milliseconds  
         delay(1000);

         // Turn right 2.8 sec
         changeSpeedOfWheels(70, 70, -70, -70, 25, 2800);        // (A1_-70-0+70, A2_-70-0+70, B1_same, B2_same, stepTime_mSec, cycleTime_mSec); 
         // Stop 0,2 sec
         changeSpeedOfWheels(70, 0, -70, 0, 25, 200);        // (A1_-70-0+70, A2_-70-0+70, B1_same, B2_same, stepTime_mSec, cycleTime_mSec); 

         delay(1000);
         
         // Turn left 2.8 sec
         changeSpeedOfWheels(-70, -70, 70, 70, 25, 2800);      // (A1_-70-0+70, A2_-70-0+70, B1_same, B2_same, stepTime_mSec, cycleTime_mSec); 
         // Stop 0,2 sec
         changeSpeedOfWheels(-70, 0, 70, 0, 25, 200);      // (A1_-70-0+70, A2_-70-0+70, B1_same, B2_same, stepTime_mSec, cycleTime_mSec);       
         buzz(buzzerPin, 1900, 200, 200);                   // format: buzz at 2100 Hz for 300 milliseconds, delay after 150 milliseconds  
         delay(1800);
                  
         buzz(buzzerPin, 1900, 200, 200);                   // format: buzz at 2100 Hz for 300 milliseconds, delay after 150 milliseconds
         lcd.clear();                                       // clears LCD
         lcd.setCursor(0,0);                                // takes cursor to position 1 of line 1
         lcd.print("Wheels work good.");
         delay(1800);
  
  // END OF WHEELS TEST  ***********************************************************************************

  buzz(buzzerPin, 1700, 200, 200);                          // format: buzz at 2100 Hz for 300 milliseconds, delay after 150 milliseconds
  buzz(buzzerPin, 1900, 200, 200);                          // format: buzz at 2100 Hz for 300 milliseconds, delay after 150 milliseconds
  lcd.clear();                                              // clears LCD
  lcd.setCursor(0,0);                                       // takes cursor to position 1 of line 2
  lcd.print("All systems are");
  lcd.setCursor(0,1);
  lcd.print("working ok!");
  delay(1000);
  lcd.setCursor(0,2);
  lcd.print("I can begin my main");
  lcd.setCursor(0,3);
  lcd.print("program now.");
  delay(1000);

*/

  movementMarker = 0;
}

void buzz(int targetPin, int frequency, int lengthBeep, int delay_After) {
   long delayValue = 1000000/frequency/2;                   // calculate the delay value between transitions
                                                            // 1 second's worth of microseconds, divided by the frequency, then split in half since
                                                            // there are two phases to each cycle
   long numCycles = frequency * lengthBeep/ 1000;               // calculate the number of cycles for proper timing
                                                            // multiply frequency, which is really cycles per second, by the number of seconds to 
                                                            // get the total number of cycles to produce
   for (long i=0; i < numCycles; i++){                      // for the calculated length of time...
    digitalWrite(targetPin,HIGH);                           // write the buzzer pin high to push out the diaphragm
    delayMicroseconds(delayValue);                          // wait for the calculated delay value
    digitalWrite(targetPin,LOW);                            // write the buzzer pin low to pull back the diaphragm
    delayMicroseconds(delayValue);                          // wait againf or the calculated delay value
   }
   delay(delay_After);
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

// this function should make the movement of an arm smooth, shoulder, forearm and fingers to move simultaneously.
/*void moveArm(int Forearm1, int Forearm2, int Shoulder1, int Shoulder2, int Fingers1, int Fingers2, int stepTime, int cycleTime, int delayMilliSec)
{
   float an = a1;
   float bn = b1;

   int n = (int) (cycleTime / stepTime + 0.5);
 
   for (int i = 1; i <= n; i++) 
   {
         int i_want_movement_right = (int) (an + 0.5);                // this is real movement, range from -70 to +70
         int i_want_movement_left = (int) (bn + 0.5);                 // this is real movement, range from -70 to +70               
         int pos_Right = -i_want_movement_right + 90;   //  60 full backward      120 full forward    90 stop
         int pos_Left = i_want_movement_left + 90;      // 120 full backward       60 full forward    90 stop  
         servo1.write(pos_Right);
         servo2.write(pos_Right+21);                    // tuning for this servo to stop at 90 is +1
         servo3.write(pos_Right);   
         servo4.write(pos_Left);
         servo5.write(pos_Left+1);                      // tuning for this servo to stop at 90 is +21
         servo6.write(pos_Left);

         an = (a2 - a1) / n + an;
         bn = (b2 - b1) / n + bn;    

         Serial.println(an);
         Serial.println(bn);
         Serial.println(n);
         Serial.println(i);
         Serial.println();         
         
         delay(stepTime);
   }
         int i_want_movement_right = a2;                // this is real movement, range from -70 to +70
         int i_want_movement_left = b2;                 // this is real movement, range from -70 to +70               
         int pos_Right = -i_want_movement_right + 90;   //  60 full backward      120 full forward    90 stop
         int pos_Left = i_want_movement_left + 90;      // 120 full backward       60 full forward    90 stop  
         servo1.write(pos_Right);
         servo2.write(pos_Right+21);                    // tuning for this servo to stop at 90 is +1
         servo3.write(pos_Right);   
         servo4.write(pos_Left);
         servo5.write(pos_Left+1);                      // tuning for this servo to stop at 90 is +21
         servo6.write(pos_Left);
}
*/

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


void changeSpeedOfWheels(float a1, float a2, float b1, float b2, int stepTime, int cycleTime) 
{
   float an = a1;
   float bn = b1;

   int n = (int) (cycleTime / stepTime + 0.5);
 
   for (int i = 1; i <= n; i++) 
   {
         int i_want_movement_right = (int) (an + 0.5);                // this is real movement, range from -70 to +70
         int i_want_movement_left = (int) (bn + 0.5);                 // this is real movement, range from -70 to +70               
         int pos_Right = -i_want_movement_right + 90;                 //  60 full backward      120 full forward    90 stop
         int pos_Left = i_want_movement_left + 90;                    // 120 full backward       60 full forward    90 stop  
         servo1.write(pos_Right);
         servo2.write(pos_Right);                      
         servo3.write(pos_Right);   
         servo4.write(pos_Left);
         servo5.write(pos_Left+21);                                   // tuning for this servo to stop at 90 is +21
         servo6.write(pos_Left+1);                                    // tuning for this servo to stop at 90 is +1

         an = (a2 - a1) / n + an;
         bn = (b2 - b1) / n + bn;           
         
         delay(stepTime);
   }
         int i_want_movement_right = a2;                              // this is real movement, range from -70 to +70
         int i_want_movement_left = b2;                               // this is real movement, range from -70 to +70               
         int pos_Right = -i_want_movement_right + 90;                 //  60 full backward      120 full forward    90 stop
         int pos_Left = i_want_movement_left + 90;                    // 120 full backward       60 full forward    90 stop  
         servo1.write(pos_Right);
         servo2.write(pos_Right);                      
         servo3.write(pos_Right);   
         servo4.write(pos_Left);
         servo5.write(pos_Left+21);                                   // tuning for this servo to stop at 90 is +21
         servo6.write(pos_Left+1);                                    // tuning for this servo to stop at 90 is +1

}

int scanObstacleAngle(int frontRadarDirectionMarker, int obstacleDistanceLimit) {

  int result = 45;

  switch (frontRadarDirectionMarker) {
     case 0:  {
        frontRadar.write(48);                    // 87 calibrated
        delay(100);
        for (int i = 48; i <= 138; i++)
        {  
           frontRadar.write(i-3);                // 87 calibrated
           delay (10);
           long sum = 0;
           for (int j = 1; j <= 5; j++) {
              delay(2);
              takeMeasurement[j] = analogRead(frontRadarPin);
              sum = sum + takeMeasurement[j];
           }
           frontDistance[i-3] = sum / 5;
        }
     break;   
     } 
  
     case 1:  {
        frontRadar.write(138);                    // 87 calibrated
        delay(100);
        for (int i = 138; i >= 48; i--)
        {  
           frontRadar.write(i-3);                // 87 calibrated
           delay (10);
           long sum = 0;
           for (int j = 1; j <= 5; j++) {
              delay(2);
              takeMeasurement[j] = analogRead(frontRadarPin);
              sum = sum + takeMeasurement[j];
           }
           frontDistance[i-3] = sum / 5;
        }
        break;
     } 
  }   

  // search for biggest value in a massive ********

  int closest = obstacleDistanceLimit;
  for (int i = 45; i <= 135; i++) {
     if (closest < frontDistance[i]) {
        result = i;
        closest = frontDistance[i]; 
     }
  }

  Serial.print("Distance is ");
  Serial.println(closest);
  if (closest == obstacleDistanceLimit) {
    result = 400;                                      // should be bigger than 300, then it means no obstacle
  }

  lcd.clear();                                         // clears LCD
  lcd.setCursor(0,0);                                  // takes cursor to position 1 of line 2
  lcd.print(result);
  lcd.print("    ");
  buzz(buzzerPin, 1900, 50, 0);                        // format: buzz at 2100 Hz for 300 milliseconds, delay after 150 milliseconds
  return result;

}

void loop()                                                                    // main program loop
{        
   switch (frontRadarDirectionMarker) {
      case 0:
         frontRadarDirectionMarker = 1;       // changes marker of radar measurement direction
         break;
      case 1:
         frontRadarDirectionMarker = 0;
         break;
   }

   int obstacleAngle = scanObstacleAngle(frontRadarDirectionMarker, obstacleDistanceLimit);

   if (obstacleAngle == 400) {
      Serial.println(obstacleAngle);
      Serial.println("I continue to move forward");
      if (movementMarker == 0) { 
         changeSpeedOfWheels(0, mainMovementSpeed, 0, mainMovementSpeed, 10, 300);
         changeSpeedOfWheels(mainMovementSpeed, mainMovementSpeed, mainMovementSpeed, mainMovementSpeed, 10, 1000);
         movementMarker = 1;
      }
      if (movementMarker == 1) {
         changeSpeedOfWheels(mainMovementSpeed, mainMovementSpeed, mainMovementSpeed, mainMovementSpeed, 10, 1000); 
         changeSpeedOfWheels(mainMovementSpeed, 0, mainMovementSpeed, 0, 10, 300); 
         movementMarker = 0;
      }
   }

   if (obstacleAngle >= obstacleLeftLimit && obstacleAngle <= 90) {
      Serial.println(obstacleAngle);
      Serial.println("I turn right");
      if (movementMarker == 1) { 
         changeSpeedOfWheels(mainMovementSpeed, 0, mainMovementSpeed, 0, 10, 300);
         movementMarker = 0;
         changeSpeedOfWheels(0, 70, 0, -70, 25, 500);
         changeSpeedOfWheels(70, 0, -70, 0, 25, 500);
      }
      if (movementMarker == 0) { 
         movementMarker = 0;
         changeSpeedOfWheels(0, 70, 0, -70, 25, 500);
         changeSpeedOfWheels(70, 0, -70, 0, 25, 500);
      }
   }

   if (obstacleAngle > 90 && obstacleAngle <= obstacleRightLimit) {
      Serial.println(obstacleAngle);
      Serial.println("I turn left");
      if (movementMarker == 1) { 
         changeSpeedOfWheels(mainMovementSpeed, 0, mainMovementSpeed, 0, 10, 300);
         movementMarker = 0;
         changeSpeedOfWheels(0, -70, 0, 70, 25, 500);
         changeSpeedOfWheels(-70, 0, 70, 0, 25, 500);
      }
      if (movementMarker == 0) { 
         movementMarker = 0;
         changeSpeedOfWheels(0, -70, 0, 70, 25, 500);
         changeSpeedOfWheels(-70, 0, 70, 0, 25, 500);
      }
   }

   






















/*   
   // Go Forward-Left and Stop
   changeSpeedOfWheels(0, 7, 0, 70, 50, 1500);      // (A1_-70-0+70, A2_-70-0+70, B1_same, B2_same, stepTime_mSec, cycleTime_mSec); 
   delay(5000);
   changeSpeedOfWheels(7, 0, 70, 0, 50, 1500);
   delay(3000);

   // *****************  Pick up from ground: parking position shoulder 180, forearm 6, fingers 56 closed, 97 open  
   // *****************  moveServo(fromPosition_0-180, toPosition_0-180, timeBetween1DegreeMilliSeconds, delayAfterMilliSeconds)
   
                                                moveForearm(6, 45, 20, 1000);  
                                                                                         moveFingers(56, 97, 10, 2000);
      moveShoulder(180, 90, 30, 1000);
                                                                                         moveFingers(97, 56, 10, 1000);
      moveShoulder(90, 180, 30, 1000);
                                                moveForearm(45, 6, 20, 1000);  

   // Turn Around 180 Degrees
   changeSpeedOfWheels(0, 70, 0, -70, 50, 1500);      // (A1_-70-0+70, A2_-70-0+70, B1_same, B2_same, stepTime_mSec, cycleTime_mSec); 
   delay(8000);
   changeSpeedOfWheels(70, 0, -70, 0, 50, 1500);
   delay(2000);

   // Go Forward-Left 
   changeSpeedOfWheels(0, 9, 0, 70, 50, 2500);      // (A1_-70-0+70, A2_-70-0+70, B1_same, B2_same, stepTime_mSec, cycleTime_mSec); 
   delay(4000);
   changeSpeedOfWheels(9, 0, 70, 0, 50, 2500);
   delay(2000);
   


   // Let it go
  
                                                moveForearm(6, 35, 20, 500);  
      moveShoulder(180, 110, 30, 500);
                                                moveForearm(35, 68, 20, 500);
                                                                                         moveFingers(56, 97, 10, 2000);
                                                                                         moveFingers(97, 56, 10, 1000);
                                                moveForearm(68, 35, 20, 500); 
      moveShoulder(110, 180, 30, 500);
                                                moveForearm(35, 6, 20, 1000);  

   
   
   // Turn left
   changeSpeedOfWheels(0, -70, 0, 70, 50, 1500);      // (A1_-70-0+70, A2_-70-0+70, B1_same, B2_same, stepTime_mSec, cycleTime_mSec); 
   delay(8500);
   changeSpeedOfWheels(-70, 0, 70, 0, 50, 1500);
   delay(2000);   

   // Go Forward-Right
   changeSpeedOfWheels(0, 70, 0, 7, 100, 2500);
   delay(5000);
   changeSpeedOfWheels(70, 0, 7, 0, 100, 2500); 
   delay(3000);
   
*/    
}



