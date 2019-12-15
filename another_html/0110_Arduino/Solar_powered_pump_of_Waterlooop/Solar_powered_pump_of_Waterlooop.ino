/*

   Program for "Waterlooop" system solar powered pump with moisture sensor, LCD and real-time clock

   Solar pump is used to oversee the soil humidity, and add water, as necessary, or in intervals, defined by user.
   It is device of "Waterlooop" system, designed to minimise usage of water for irrigation. 
        
   Clock is connected to input I2C bus.
   Moisture sensor is connected to input pin A0.
        
   LCD 16x2 display is connected to output I2C bus as well.
   Buzzer is connected to output pin 8.
   Micropump is connected to output pin 3.
        
   Arduino is powered by 12V lead battery, connected with thin film solar charger 5W. 

   Created 15 June 2015
   By Nick Grigoryev
   In California, San Diego

   Modified ... (date)
   By ... (name)

   http://www.technohumanist.org

*/

#include "Wire.h"                  // library to manage I2C devices
#include "LiquidCrystal_I2C.h"     // standard library to manage LCDs
#include "RTClib.h"                // library of Real Time Clock commands

LiquidCrystal_I2C lcd(0x27,20,4);  // create object "lcd" on address 0x27 for a 20 chars and 4 line display
RTC_DS1307 rtc;                    // create object "rtc"

int buzzerPin = 10;                // Define buzzer pin
int pot_Voltage_Pin = 3;           // Assign Soil Moist Sensor voltage output to pin 3
int potPin = A0;                   // Assign Soil Moist Sensor pin to A0

int pump_1_Pin = 4;                // assign Pump_1 pin to 6th
int pump_2_Pin = 5;
int pump_3_Pin = 6;
int pump_4_Pin = 7;

float Moisture_Dia_High = 950;     // set upper border of sensor range
float Moisture_Dia_Low = 480;      // set lower border of sensor range
float Moisture_Percentage = 90;
float Moisture_Now = 750;

float Soil_Moisture_Sensor(int potPin, long numberApprox) {   ////// potentiometer procedure (moist sensor) - returns value from 0 to 1023
    float result = 0;  
    for (unsigned int i=1; i<numberApprox; ++i) {             // approximation cycle
         int potValue = analogRead(potPin);
         result = result + potValue;      
    }
    result = result/numberApprox;                             // calculating average value of potentiometer
    return result;
}

void setup()                               // runs once
{
  pinMode(potPin,INPUT);                   // Declares pot_Pin as an input
  pinMode(pot_Voltage_Pin, OUTPUT);        // Declares pot_Value_Pin as an output
  pinMode(buzzerPin, OUTPUT);              // Declares buzzerPin as an output
  pinMode(pump_1_Pin, OUTPUT);             
  pinMode(pump_2_Pin, OUTPUT);
  pinMode(pump_3_Pin, OUTPUT);
  pinMode(pump_4_Pin, OUTPUT);

  Serial.begin(9600);                                       // Starting serial port
  Wire.begin();
  lcd.begin();                                              // initialize the lcd 
  rtc.begin();                                              // initialize the rtc clock

  buzz(buzzerPin, 2100, 100, 10);                           // buzz at 4900Hz for 100 milliseconds, delay after 10 milliseconds
  buzz(buzzerPin, 2300, 100, 10);                           // buzz at 4750Hz for 100 milliseconds, same 
  buzz(buzzerPin, 2650, 100, 0);                            // buzz at 4500Hz for 100 milliseconds, same

  byte glyph_1[8] = {
     B00100,
     B00100,
     B01110,
     B01110,
     B11111,
     B11111,
     B11111,         
     B01110,         };
  lcd.createChar(0, glyph_1);                               // creates custom glyph "glyph_1" numbered 0 (can be from 0 to 7, total 8 custom glyphs)

  lcd.setCursor(5,1);                                       // takes cursor to position 7 of line 2
  lcd.print("Waterl");
  lcd.write(byte(0));                                       // writes custom glyph_1
  lcd.write(byte(0));                                       // writes custom glyph_1
  lcd.write(byte(0));                                       // writes custom glyph_1
  lcd.print("p");
  delay(4000);

//  rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));         // Manual transfer of PC time to controller - delete after transfer!!! 
                                                            // Or clock will upload PC fixed time value every time, when you press "Reset" button.
  lcd.backlight();                                          // turn on backlight
  lcd.clear();                                              // clears LCD
  
  buzz(buzzerPin, 2100, 100, 150);                          // buzz at 4500Hz for 100 milliseconds, same
  buzz(buzzerPin, 2100, 100, 0);                            // buzz at 4500Hz for 100 milliseconds, same

}

void buzz(int targetPin, long frequency, long length, long delay_After) {
   long delayValue = 1000000/frequency/2;                   // calculate the delay value between transitions
                                                            // 1 second's worth of microseconds, divided by the frequency, then split in half since
                                                            // there are two phases to each cycle
   long numCycles = frequency * length/ 1000;               // calculate the number of cycles for proper timing
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

void loop()                                                      // runs constantly
{
    DateTime now = rtc.now();  
    if (now.second()==30) { delay(990); lcd.clear(); }           // clears LCD every minute when seconds = 30
    int relay_Voltage = 220;                                     // relays switching voltage
    long pump_1_Pumping_Time = 3000;                             // sets pumps working time to 3 seconds
    
    lcd.setCursor(10, 2);                                        // print time on LCD
    if (now.hour()<10)    { lcd.print("0");} 
    lcd.print(now.hour(), DEC);
    lcd.print(':');
    if (now.minute()<10)  { lcd.print("0");} 
    lcd.print(now.minute(), DEC);
    lcd.print(':');
    if (now.second()<10)  { lcd.print("0");} 
    lcd.print(now.second(), DEC);
//  lcd.print("  ");
    
    lcd.setCursor(10, 3);
    if (now.month()<10)   { lcd.print("0");}
    lcd.print(now.month(), DEC);
    lcd.print('/');
    if (now.day()<10)     { lcd.print("0");}
    lcd.print(now.day(), DEC);
    lcd.print('/');
    lcd.print(now.year(), DEC);
//  lcd.print(" ");
    
 
/////////////////////////////   Procedure to measure soil moist  //   
    if (now.second()==0) {                                       // measure soil moist once a minute
        analogWrite(pot_Voltage_Pin, 255);                       // turn on moist sensor 5V
        delay(1500);                                             // wait 0.5 sec
        Moisture_Now = Soil_Moisture_Sensor(potPin, 8000);
        if (Moisture_Dia_High < Moisture_Now) { 
            Moisture_Dia_High = Moisture_Now;                    // растягиваем диапазон вверх, если нужно, стартуем с 985
        }
        if (Moisture_Dia_Low > Moisture_Now) { 
            Moisture_Dia_Low = Moisture_Now;                     // растягиваем диапазон вниз, если нужно, стартуем с 385
        }
        delay(200);
        analogWrite(pot_Voltage_Pin, 0);
        Moisture_Percentage = 100.-(100.*(Moisture_Now - Moisture_Dia_Low)/(Moisture_Dia_High - Moisture_Dia_Low));
    }
    
    lcd.setCursor(0,0);                                     // takes cursor to position 1 of line 1
    lcd.print("Soil ");
    lcd.write(byte(0));                                     // writes custom glyph_1
    lcd.print(" ");
    lcd.print(Moisture_Percentage, 1);                      // print moist on LCD, with 1 character after comma
    lcd.print("%  ");
    
/*  
    lcd.setCursor(0,1);
    lcd.print("Air  ");
    lcd.write(byte(0));
    lcd.print(" ");
    lcd.print("52.4%");
*/

    lcd.setCursor(0,2);                                     // takes cursor to position 1 of line 1
    lcd.print("L:10h15m");
    lcd.print(" ");
    lcd.setCursor(0,3);
    lcd.print("N:04h03m");

    Serial.print("high = ");
    Serial.println(Moisture_Dia_High);
    Serial.print("now = ");
    Serial.println(Moisture_Now);
    Serial.print("low = ");
    Serial.println(Moisture_Dia_Low);
    Serial.println(" ");

//////////////////////////////// PUMP ON RELAY 1 /////////////////////////////    
/*    if (now.hour()==16) {                                    
        if (now.minute()==16) {
          if (now.second()==0) {
             buzz(buzzerPin, 2500, 70, 0);
             analogWrite(pump_1_Pin, relay_Voltage);     // it gives 5V to Pump 1 pin, out of 5, dia 0-255
             delay(pump_1_Pumping_Time);                 // pumps water  
             analogWrite(pump_1_Pin, 0);                 // turns Pump 1 off

          }
        }
      } 
*/ 

///////////////////////////////// PUMP ON RELAY 2 /////////////////////////////    
/*  if (now.hour()==16) {                                    
       if (now.minute()==16) {
          if (now.second()==15) {
             analogWrite(pump_2_Pin, relay_Voltage);     // it gives 5V to Pump 2 pin, out of 5, dia 0-255
             delay(pump_1_Pumping_Time);                 // pumps water  
             analogWrite(pump_2_Pin, 0);                 // turns Pump 2 off

          }
       }
    }  
*/

///////////////////////////////// PUMP ON RELAY 3 /////////////////////////////    
/*  if (now.hour()==16) {                                    
       if (now.minute()==16) {
          if (now.second()==30) {
             analogWrite(pump_3_Pin, relay_Voltage);     // it gives 5V to Pump 3 pin, out of 5, dia 0-255
             delay(pump_1_Pumping_Time);                 // pumps water  
             analogWrite(pump_3_Pin, 0);                 // turns Pump 3 off

          }
       }
    }  
*/

///////////////////////////////// PUMP ON RELAY 4 /////////////////////////////    
/*  if (now.hour()==16) {                                    
       if (now.minute()==16) {
          if (now.second()==45) {
             analogWrite(pump_4_Pin, relay_Voltage);     // it gives 5V to Pump 4 pin, out of 5, dia 0-255
             delay(pump_1_Pumping_Time);                 // pumps water  
             analogWrite(pump_4_Pin, 0);                 // turns Pump 4 off

          }
       }
    }  
*/


}
