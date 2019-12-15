
#include <Servo.h>                               // Includes code of "Servo library", to use the servo functions
#include <LiquidCrystal_I2C.h>                   // Includes standard library to manage LCDs
#include <Wire.h>                                // Includes library to manage I2C devices

Servo wheelServoFrontPassengerSide;              // Creates servo objects to control four wheels servos        
Servo wheelServoRearPassengerSide;                         
Servo wheelServoFrontDriverSide;                         
Servo wheelServoRearDriverSide;

Servo irServoFront;                              // Creates servo objects to control three IR sensors servos, front, left and right
Servo irServoRearDriver;
Servo irServoRearPassenger;

LiquidCrystal_I2C lcd(0x27, 20, 4);              // Creates object "lcd" on address 0x27 for a 20 chars and 4 line display


int wheelServoFrontPassengerSidePin = 10;        // Defines the pin numbers for wheels
int wheelServoRearPassengerSidePin  =  9;
int wheelServoFrontDriverSidePin    = 11;
int wheelServoRearDriverSidePin     =  8;  

int irServoFrontPin                 = 12;        // Defines the pin numbers for servos which turn IR sensors
int irServoRearDriverPin             = 6;
int irServoRearPassengerPin          = 5;

int irFrontPin                      = A2;        // Defines the pins for Sharp IR distance sensors
int irPassengerSidePin              = A3;        // Power supply  for them is Vc = 5V, not 6V as for Hitec servos
int irDriverSidePin                 = A1;

int ledLightDriverSidePin           = 34;        // Defines the pins for front LED lights
int ledLightPassengerSidePin        = 35;

void setup() {

   pinMode(irFrontPin, INPUT);                   // Sets pins of IR distance sensors in input mode
   pinMode(irPassengerSidePin, INPUT); 
   pinMode(irDriverSidePin, INPUT); 
         
   pinMode(ledLightDriverSidePin, OUTPUT);       // Sets pins of front LED lights in output mode
   pinMode(ledLightPassengerSidePin, OUTPUT);
   
   Serial.begin(9600);                                                       // Starts Serial port at the speed 9600 baud
   Wire.begin();                                                             // Starts I2C bus
   lcd.begin();                                                              // Starts lcd object 

   wheelServoFrontPassengerSide.attach(wheelServoFrontPassengerSidePin);     // Attaches wheels servos to four pins
   wheelServoRearPassengerSide.attach(wheelServoRearPassengerSidePin);
   wheelServoFrontDriverSide.attach(wheelServoFrontDriverSidePin);
   wheelServoRearDriverSide.attach(wheelServoRearDriverSidePin);
   
   irServoFront.attach(irServoFrontPin);                                     // Attaches IR servos to three pins
   irServoRearDriver.attach(irServoRearDriverPin);
   irServoRearPassenger.attach(irServoRearPassengerPin);

   wheelServoFrontPassengerSide.write(93);                                   // Sends the signal to wheels servos to stop
   wheelServoRearPassengerSide.write(93);              
   wheelServoFrontDriverSide.write(93);                  
   wheelServoRearDriverSide.write(93);                 

   digitalWrite(ledLightDriverSidePin, HIGH);                                // Turns LED lights on, sending 5V to LEDs
   digitalWrite(ledLightPassengerSidePin, HIGH);

   irServoFront.write(90);
   irServoRearDriver.write(171);
   irServoRearPassenger.write(7);

   lcd.backlight();                                          // turns on backlight
   lcd.clear();                                              // clears LCD
   lcd.setCursor(7, 1);                                      // takes cursor to position 8 of line 2
   lcd.print("Hello!");
   lcd.setCursor(3, 2);
   lcd.print("Hulk is alive :)");
       
}

void changeSpeedOfWheels(float a1, float a2, float b1, float b2, int stepTime, int cycleTime) 
{
   a1 = -a1;
   a2 = -a2;
   b1 = -b1;
   b2 = -b2;

   float an = a1;
   float bn = b1;
   int n = (int) (cycleTime / stepTime + 0.5);
 
   for (int i = 1; i <= n; i++) 
   {
         int i_want_movement_right = (int) (an + 0.5);                // this is real movement, range from -70 to +70
         int i_want_movement_left = (int) (bn + 0.5);                 // this is real movement, range from -70 to +70               
         int pos_Right = -i_want_movement_right + 90;                 //  60 full backward      120 full forward    90 stop
         int pos_Left = i_want_movement_left + 90;                    // 120 full backward       60 full forward    90 stop  
         wheelServoFrontPassengerSide.write(pos_Right + 3);
         wheelServoRearPassengerSide.write(pos_Right + 3);                      
         wheelServoFrontDriverSide.write(pos_Left + 3);   
         wheelServoRearDriverSide.write(pos_Left + 3);
                                
         an = (a2 - a1) / n + an;
         bn = (b2 - b1) / n + bn;           
         
         delay(stepTime);
   }
         int i_want_movement_right = a2;                              // this is real movement, range from -70 to +70
         int i_want_movement_left = b2;                               // this is real movement, range from -70 to +70               
         int pos_Right = -i_want_movement_right + 90;                 //  60 full backward      120 full forward    90 stop
         int pos_Left = i_want_movement_left + 90;                    // 120 full backward       60 full forward    90 stop  
         wheelServoFrontPassengerSide.write(pos_Right + 3);
         wheelServoRearPassengerSide.write(pos_Right + 3);                      
         wheelServoFrontDriverSide.write(pos_Left + 3);   
         wheelServoRearDriverSide.write(pos_Left + 3);
}

void loop() {

delay(1000);

int irFrontMassive[156];                                 // Declares 3 massives for front, driver side
int irDriverMassive[159];                                // and passenger side semicircles
int irPassengerMassive[160];

for (int i = 0; i <= 160; i++)  {                        // Initialize three massives with zeros
     irFrontMassive[i] = 0;
     irDriverMassive[i] = 0;
     irPassengerMassive[i] = 0;
}

int maxVectorFrontLength = 2000;                         // Starts the vector value with closest max 
int maxVectorFrontAngle = 0;                             // Starts the vector angle with zero
irServoFront.write(11);
delay(500);
for (int i = 11; i <= 167; i++) {                        // Fills up the front distance massive with data from front IR sensor
   irServoFront.write(i); 
   delay (10);
   irFrontMassive[i] = analogRead(irFrontPin);
   if (maxVectorFrontLength > irFrontMassive[i]) {
      maxVectorFrontLength = irFrontMassive[i];
      maxVectorFrontAngle = i; 
   }
}
irServoFront.write(90);

int maxVectorDriverLength = 2000;                        // Starts the vector value with closest max 
int maxVectorDriverAngle = 0;                            // Starts the vector angle with zero
irServoRearDriver.write(12);
delay(500);
for (int i = 12; i <= 171; i++) {                        // Fills up the driver side distance massive with data from driver IR sensor
   irServoRearDriver.write(i); 
   delay (10);
   irDriverMassive[i] = analogRead(irDriverSidePin);
   if (maxVectorDriverLength > irDriverMassive[i]) { maxVectorDriverLength = irDriverMassive[i]; maxVectorDriverAngle = i; }
}
irServoRearDriver.write(91);

int maxVectorPassengerLength = 2000;                     // Starts the vector value with closest max 
int maxVectorPassengerAngle = 0;                         // Starts the vector angle with zero
irServoRearPassenger.write(7);
delay(500);
for (int i = 7; i <= 167; i++) {                         // Fills up the passenger distance massive with data from passenger IR sensor
   irServoRearPassenger.write(i); 
   delay (10);
   irPassengerMassive[i] = analogRead(irPassengerSidePin);
   if (maxVectorPassengerLength > irPassengerMassive[i]) { maxVectorPassengerLength = irPassengerMassive[i]; maxVectorPassengerAngle = i; }
}
irServoRearPassenger.write(88);


   lcd.clear();                                              // Clears LCD

   lcd.setCursor(0, 0);                                      // Takes cursor to position 1 of line 1
   lcd.print("Front A=");
   lcd.print(maxVectorFrontAngle);
   lcd.setCursor(12, 0);  
   lcd.print("L=");
   lcd.print(maxVectorFrontLength);

   lcd.setCursor(0, 1);                                      // Takes cursor to position 1 of line 2
   lcd.print("Left  A=");
   lcd.print(maxVectorDriverAngle);
   lcd.setCursor(12, 1);  
   lcd.print("L=");
   lcd.print(maxVectorDriverLength);

   lcd.setCursor(0, 2);                                      // Takes cursor to position 1 of line 3
   lcd.print("Right A=");
   lcd.print(maxVectorPassengerAngle);
   lcd.setCursor(12, 2);  
   lcd.print("L=");
   lcd.print(maxVectorPassengerLength);

   // XXXXXXXXXXXXXX Now we need to choose the maximum vector by length out of three

   int maxVectorLength = maxVectorDriverLength;     // Checks which vector is longer
   
   if (maxVectorLength > maxVectorFrontLength)      { maxVectorLength = maxVectorFrontLength;     }
   if (maxVectorLength > maxVectorPassengerLength)  { maxVectorLength = maxVectorPassengerLength; }
   
   int maxVectorAngle = maxVectorDriverAngle - 180; // -180 ... +180
   
   if (maxVectorLength == maxVectorFrontLength)     { maxVectorAngle = maxVectorFrontAngle - 90;  }
   if (maxVectorLength == maxVectorPassengerLength) { maxVectorAngle = maxVectorPassengerAngle;   }

   // XXXXXXXXXXXXX Now we need to turn the car to the angle and go length of the choosen vector

   int timeToTurn = map(maxVectorAngle, -180, 180, -2200, 2200);
   int lengthToGo = map(maxVectorLength, 160, 30, 100, 1500);

   lcd.setCursor(0, 3);                                      // Takes cursor to position 1 of line 3
   lcd.print("Angle=");
   lcd.print(maxVectorAngle);
   lcd.setCursor(11, 3);  
   lcd.print("Dist=");
   lcd.print(lengthToGo);

   if (timeToTurn > 0) {
   changeSpeedOfWheels(-35, -35, 35, 35, 20, timeToTurn);
   changeSpeedOfWheels(-35, 0, 35, 0, 20, timeToTurn/3);
   changeSpeedOfWheels(0, 35, 0, 35, 20, lengthToGo/6);
   changeSpeedOfWheels(35, 35, 35, 35, 20, lengthToGo);
   changeSpeedOfWheels(35, 0, 35, 0, 20, lengthToGo/6); 
   }
   
   if (timeToTurn < 0) {
   changeSpeedOfWheels(35, 35, -35, -35, 20, -timeToTurn);
   changeSpeedOfWheels(35, 0, -35, 0, 20, -timeToTurn/3);
   changeSpeedOfWheels(0, 35, 0, 35, 20, lengthToGo/6);
   changeSpeedOfWheels(35, 35, 35, 35, 20, lengthToGo);
   changeSpeedOfWheels(35, 0, 35, 0, 20, lengthToGo/6); 
   }

   delay(300);
    
  

   


/*
long right = 0;
long left = 0;

for (int i = 1; i <= 5; i++) { 
  ch1_right = pulseIn(7, HIGH, 25000);    // Read the pulse width of 
  ch2_left =  pulseIn(6, HIGH, 25000);    // each channel
  right = right + ch1_right;
  left = left + ch2_left;
}
  ch1_right = right / 5;
  ch2_left = left / 5;
  
  right = map(ch1_right, 1910, 1080, 45, 145);
  left = map(ch2_left, 1910, 1080, 40, 140);

if (right < 260 && left < 260) {
  wheelServoFrontPassengerSide.write(right);
  wheelServoRearPassengerSide.write(right);
  wheelServoFrontDriverSide.write(left);
  wheelServoRearDriverSide.write(left);
}

if (right > 260 && left > 260) {
*/



/*
   irServoFront.write(11);

   delay(1200);
   irServoFront.write(167);
   irServoRearDriver.write(12);
   
   delay(800);
   irServoRearPassenger.write(167);
   
   delay(1050);
   irServoFront.write(90);
   irServoRearPassenger.write(88);
   int irPassengerDistance = analogRead(irPassengerSidePin);

   delay(1350);
   irServoRearDriver.write(91);
   int irDriverDistance = analogRead(irDriverSidePin);
   
   delay(2100);
   irServoRearDriver.write(171);
   
   delay(200);
   irServoRearPassenger.write(7);
   
   delay(1900); 
   
   int irFrontDistance = analogRead(irFrontPin);

   lcd.clear();                                              // Clears LCD
   lcd.setCursor(0, 0);                                      // Takes cursor to position 2 of line 2
   lcd.print("Front ");
   lcd.print(irFrontDistance);
   lcd.setCursor(0, 1);
   lcd.print("Right ");
   lcd.print(irPassengerDistance);
   lcd.setCursor(0, 2);
   lcd.print("Left  ");
   lcd.print(irDriverDistance);     

   int goDirection = irFrontDistance;                                                // Finds the least value among distances
   if (goDirection > irPassengerDistance) { goDirection = irPassengerDistance; }
   if (goDirection > irDriverDistance)    { goDirection = irDriverDistance;    }

   if (goDirection == irFrontDistance)     {
         lcd.setCursor(11, 0);
         lcd.print("Go here!"); 
         changeSpeedOfWheels(0, 15, 0, 15, 20, 500);
         changeSpeedOfWheels(15, 15, 15, 15, 20, 2000);
         changeSpeedOfWheels(15, 0, 15, 0, 20, 500);
   }
   
   if (goDirection == irPassengerDistance) { 
         lcd.setCursor(11, 1);
         lcd.print("Go here!"); 
         changeSpeedOfWheels(-15, -15, 15, 15, 20, 1300);
         changeSpeedOfWheels(-15, 0, 15, 0, 20, 500);
         changeSpeedOfWheels(0, 15, 0, 15, 20, 500);
         changeSpeedOfWheels(15, 15, 15, 15, 20, 2000);
         changeSpeedOfWheels(15, 0, 15, 0, 20, 500);
   }
   
   if (goDirection == irDriverDistance) { 
         lcd.setCursor(11, 2);
         lcd.print("Go here!"); 
         changeSpeedOfWheels(15, 15, -15, -15, 20, 1300);
         changeSpeedOfWheels(15, 0, -15, 0, 20, 500);
         changeSpeedOfWheels(0, 15, 0, 15, 20, 500);
         changeSpeedOfWheels(15, 15, 15, 15, 20, 2000);
         changeSpeedOfWheels(15, 0, 15, 0, 20, 500);
   }
*/
}
