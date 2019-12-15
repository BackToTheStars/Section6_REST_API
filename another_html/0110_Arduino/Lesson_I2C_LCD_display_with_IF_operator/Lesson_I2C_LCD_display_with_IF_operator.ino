/*

   Program for solar powered pump with moisture sensor, LCD and real-time clock

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

LiquidCrystal_I2C lcd(0x27,16,2);  // create object "lcd" on address 0x27 for a 16 chars and 2 line display
RTC_DS1307 rtc;                    // create object "rtc"

int buzzerPin = 8;                 // Define buzzer pin
int potPin = A0;                   // assign potPin to A0

int pump_1_Pin = 3;                // assign Pump 1 pin to 3
long pump_1_Pumping_Time = 8000;   // sets Pump 1 working time to 8 seconds

float Moisture_Dia_High = 955;     // устанавливаем верхнюю границу диапазона значений сенсора
float Moisture_Dia_Low = 480;      // устанавливаем нижнюю границу диапазона значений сенсора 

float Soil_Moisture_Sensor(int potPin1, int numberApprox) {   ////// процедура потенциометра - сенсора влажности - возвращает значение от 0 до 1023
    float result = 0;  
    for (unsigned int i=1; i<numberApprox; ++i) {             // цикл аппроксимации
         int potValue = analogRead(potPin1);
         result = result + potValue;      
    }
    result = result/numberApprox;                             // вычисление среднего значения потенциометра
    return result;
}

void setup()                               // run once
{
  pinMode(potPin,INPUT);                   // Declare potPin an input
  Serial.begin(9600);                      // Starting serial port
  Wire.begin();

  starting_buzz(buzzerPin);

  lcd.begin();                             // initialize the lcd 
  rtc.begin();                             // initialize the rtc clock

//  rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));  //// manual transfer of PC time to controller - delete after transfer!!! or clock will try to upload time

  lcd.backlight();                         // turn on backlight
  lcd.clear();                             // clears LCD
}

void buzz(int targetPin, long frequency, long length, long delay_After) {
  long delayValue = 1000000/frequency/2;   // calculate the delay value between transitions
                                           //// 1 second's worth of microseconds, divided by the frequency, then split in half since
                                           //// there are two phases to each cycle
  long numCycles = frequency * length/ 1000; // calculate the number of cycles for proper timing
                                           //// multiply frequency, which is really cycles per second, by the number of seconds to 
                                           //// get the total number of cycles to produce
 for (long i=0; i < numCycles; i++){       // for the calculated length of time...
    digitalWrite(targetPin,HIGH);          // write the buzzer pin high to push out the diaphram
    delayMicroseconds(delayValue);         // wait for the calculated delay value
    digitalWrite(targetPin,LOW);           // write the buzzer pin low to pull back the diaphram
    delayMicroseconds(delayValue);         // wait againf or the calculated delay value
    delay(delay_After);
  }
}

void starting_buzz(int buzzerPin) {        ///// Процедура стартового звука
  pinMode(buzzerPin, OUTPUT);              //Set buzzerPin as output
  buzz(buzzerPin, 4900, 100, 10);          // buzz at 4900Hz for 100 milliseconds, delay after 10 milliseconds
  buzz(buzzerPin, 4750, 100, 10);          // buzz at 4750Hz for 100 milliseconds, same 
  buzz(buzzerPin, 4500, 100, 10);          // buzz at 4500Hz for 100 milliseconds, same
  buzz(buzzerPin, 3500, 100, 10);          // buzz at 3500Hz for 100 milliseconds, same
  buzz(buzzerPin, 2500, 100, 10);              // buzz at 2500Hz for 100 milliseconds, same
}

void loop()                                                 //// runs constantly
{
    DateTime now = rtc.now();  
    
    lcd.setCursor(0, 1);                                    // print time on LCD
    if (now.hour()<10) { lcd.print("0");} 
    lcd.print(now.hour(), DEC);
    lcd.print(':');
    if (now.minute()<10) { lcd.print("0");} 
    lcd.print(now.minute(), DEC);
    lcd.print(':');
    if (now.second()<10) { lcd.print("0"); } 
    lcd.print(now.second(), DEC);

////////////////// Program of Pump 1 /////////////////////

//// DAY CYCLE 1 ////////
    if (now.hour()==17) {                                    
       if (now.minute()==2) {
          if (now.second()==37) {
             analogWrite(pump_1_Pin, 75);                // it gives 1.25V to Pump 1 pin, out of 5, dia 0-255
             delay(pump_1_Pumping_Time);                 // pumps water  
             analogWrite(pump_1_Pin, 0);                 // turns Pump 1 off
          }
       }
    }
//// DAY CYCLE 2 ////////    
//    if (now.hour()==16) {                                    
//       if (now.minute()==16) {
          if (now.second()==0) {
             analogWrite(pump_1_Pin, 75);                // it gives 1.25V to Pump 1 pin, out of 5, dia 0-255
             delay(pump_1_Pumping_Time);                 // pumps water  
             analogWrite(pump_1_Pin, 0);                 // turns Pump 1 off
          }
//       }
//    }  
  
    float Moisture_Now = Soil_Moisture_Sensor(potPin, 2000);
    if (Moisture_Dia_High < Moisture_Now) { 
        Moisture_Dia_High = Moisture_Now;                   // растягиваем диапазон вверх, если нужно, стартуем с 985
    }
    if (Moisture_Dia_Low > Moisture_Now) { 
        Moisture_Dia_Low = Moisture_Now;                    // растягиваем диапазон вниз, если нужно, стартуем с 385
    }
    
    float Moisture_Percentage = 100.-(100.*(Moisture_Now - Moisture_Dia_Low)/(Moisture_Dia_High - Moisture_Dia_Low));

    lcd.setCursor(0,0);                                     // takes cursor to position 0 of line 0
    lcd.print("Soil ");  
    lcd.print(Moisture_Percentage);                         // print results on LCD
    lcd.print("% wet ");
    
    Serial.print("high = ");
    Serial.println(Moisture_Dia_High);
    Serial.print("now = ");
    Serial.println(Moisture_Now);
    Serial.print("low = ");
    Serial.println(Moisture_Dia_Low);
    Serial.println(" ");
}


/*
    lcd.print(now.year(), DEC);
    lcd.print('/');
    lcd.print(now.month(), DEC);
    lcd.print('/');
    lcd.print(now.day(), DEC);
    lcd.print(' ');
*/

