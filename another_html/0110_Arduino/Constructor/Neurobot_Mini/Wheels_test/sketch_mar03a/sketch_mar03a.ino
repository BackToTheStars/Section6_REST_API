#include <Servo.h>                    // includes code of "Servo library", to use servo functions

Servo servo1;                         // creates servo object to control a servo        
Servo servo2;                         // right - 4, 5, 6 pin, starting from head 
Servo servo3;                         // left - 7, 8, 9 pin, starting from head
Servo servo4;
Servo IR_sensor;

int frontRadarPin = A3;               // Sharp IR distance sensor is connected to sensor pin A3, power there Vc = 5V
int distance = 0;                     // integer to store the distance from Sharp IR distance sensor
int light_1_pin = 34;
int light_2_pin = 35;

int ch1_right;                        // Here's where we'll keep our channel values
int ch2_left;

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
         servo1.write(pos_Right+2);
         servo2.write(pos_Right+4);                      
         servo3.write(pos_Left+2);   
         servo4.write(pos_Left+2);
                                
         an = (a2 - a1) / n + an;
         bn = (b2 - b1) / n + bn;           
         
         delay(stepTime);
   }
         int i_want_movement_right = a2;                              // this is real movement, range from -70 to +70
         int i_want_movement_left = b2;                               // this is real movement, range from -70 to +70               
         int pos_Right = -i_want_movement_right + 90;                 //  60 full backward      120 full forward    90 stop
         int pos_Left = i_want_movement_left + 90;                    // 120 full backward       60 full forward    90 stop  
         servo1.write(pos_Right+2);
         servo2.write(pos_Right+4);                      
         servo3.write(pos_Left+2);   
         servo4.write(pos_Left+2);

}

void setup() {

   pinMode(6, INPUT);                  // Input for Futaba, 6th channel
   pinMode(7, INPUT);                  // Input for Futaba, 1st channel
   pinMode(frontRadarPin, INPUT);      // Input for Sharp IR distance sensor
   pinMode(light_1_pin, OUTPUT);
   pinMode(light_2_pin, OUTPUT);
   
   Serial.begin(9600);                 // start Serial port at 9600 baud

   servo1.attach(10);                  // attaches the servo1 on pin 4 of Arduino
   servo2.attach(9);
   servo3.attach(11);
   servo4.attach(8);
   IR_sensor.attach(4);                // Servo of IR is on 4th, IR itself - on 9th pin

//   servo1.write(92);
//   servo2.write(94);
//   servo3.write(92);
//   servo4.write(92);

   servo1.write(180);
   servo2.write(180);
   servo3.write(0);
   servo4.write(0);

   delay(4000);

   servo1.write(180);
   servo2.write(180);
   servo3.write(180);
   servo4.write(180);

   delay(5000);  

   servo1.write(110);
   servo2.write(110);
   servo3.write(70);
   servo4.write(70);

   digitalWrite(light_1_pin, HIGH);
   digitalWrite(light_2_pin, HIGH);

   IR_sensor.write(86);
   delay (1500);
   IR_sensor.write(6);
   delay(1500);
   IR_sensor.write(165);
   delay(1500);
   IR_sensor.write(86);
   delay(2000);
   IR_sensor.write(45);
   delay(200);
   IR_sensor.write(86);
   delay(3000);   

}

void loop() {

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

//  Serial.print("Ch1_right:");             // Print the value of 
//  Serial.println(ch1_right);              // each channel
//  Serial.print("Ch2_left:");
//  Serial.println(ch2_left);
//  Serial.println();
  
  right = map(ch1_right, 1910, 1080, 45, 145);
  left = map(ch2_left, 1910, 1080, 40, 140);

if (right < 260 && left < 260) {
  servo1.write(right);
  servo2.write(right);
  servo3.write(left);
  servo4.write(left);
}

if (right > 260 && left > 260) {

   delay(8000);
   IR_sensor.write(45);
   delay(200);
   IR_sensor.write(86);
   delay(1000); 
   distance = analogRead(frontRadarPin);
   Serial.print("Distance = "); 
   Serial.println(distance);     
}

//  Serial.print("Ch1_right:");             // Print the value of 
//  Serial.println(right);                  // each channel
//  Serial.print("Ch2_left:");
//  Serial.println(left);
  Serial.println();

  

}
