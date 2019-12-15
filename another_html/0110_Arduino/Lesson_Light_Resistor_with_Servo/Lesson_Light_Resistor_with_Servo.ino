
#include <Servo.h>

Servo myPointer;         // Create a Servo Object

int   servoPin=4;        // порт серводвигателя
float servoPos=0;        // позиция серводвигателя
int   servoDelay=0;      // время для движения двигателя на позицию

int   potPin=A1;         // порт фоторезистора    
float potValue=0;        // аппроксимированное значение потенциометра
int   potValueJ=0;       // текущее значение потенциометра
int   numberApprox=50;   // число аппроксимаций, примерно 8000 = 1 сек


void setup() {
  
    Serial.begin(115200);        // инициализация серийного порта
    myPointer.attach(servoPin);  // инициализация серводвигателя
    pinMode(potPin, INPUT);      // инициализация порта ввода
}


void loop() {
        
    delay(0);                             // milliseconds;
  
    potValue=0;                           // сброс аппроксимированного значения фоторезистора
    for (int j=1; j<=numberApprox; ++j) { // цикл аппроксимации
    potValueJ = analogRead(potPin);
    potValue = potValue + potValueJ;      
    }

    potValue = potValue/numberApprox;     // вычисление среднего значения фоторезистора
    Serial.print("Servo position is "); 
    servoPos = 3+potValue*1.5/1023.*175.; // вычисление позиции серво
    Serial.print(servoPos);               // вывод позиции серво на экран
    Serial.println(" degrees");
    
    Serial.print("Photoresistor value is ");
    Serial.println(potValue*1.5);         // вывод показаний фоторезистора на экран
    Serial.println();
    
    myPointer.write(servoPos);            // position should be between 0 and 180
    delay(servoDelay);
}



