#include <OneWire.h>
#include <DallasTemperature.h>

float temp;
 
// Data wire is plugged into pin 2 on the Arduino
#define ONE_WIRE_BUS 11
 
// Setup a oneWire instance to communicate with any OneWire devices 
// (not just Maxim/Dallas temperature ICs)
OneWire oneWire(ONE_WIRE_BUS);
 
// Pass our oneWire reference to Dallas Temperature.
DallasTemperature sensors(&oneWire);
 
void setup(void)
{
            // start serial port
  Serial.begin(9600);
            // Start up the sensor library
  sensors.begin();
            // initialize digital pin LED_BUILTIN as an output.
  pinMode(4, OUTPUT);
}
 
void loop(void)
{
            // call sensors.requestTemperatures() to issue a global temperature
            // request to all devices on the bus
  sensors.requestTemperatures();     // Send the command to get temperatures
  delay(300);
  temp = sensors.getTempCByIndex(0);
  
  Serial.println(temp);  
            // You can have more than one IC on the same bus. 
            // 0 refers to the first IC on the wire

  if (temp < 37)  {
     if (temp < 35)   {
        digitalWrite(4, HIGH);         // turn the lamp on 
//        Serial.println("RELAY ON ");
        delay(30000);                  // wait for 10 seconds
     } else {
        digitalWrite(4, HIGH);         // turn the lamp on 
//        Serial.println("RELAY ON ");
        delay(1000);                   // wait for 5 seconds
     }
  } 
  if (temp >= 37) {
     digitalWrite(4, LOW);             // turn the lamp off
//     Serial.println("RELAY OFF ");
     delay(10000);
  }
}
