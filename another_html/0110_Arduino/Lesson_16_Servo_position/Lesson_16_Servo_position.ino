
#include <Servo.h>

Servo myPointer;         // Create a Servo Object

int   trigPin=13;
int   echoPin=11;
float pingTime=0;
float speedOfSound=0;
int   targetDistance=20; // расстояние в сантиметрах;

int   servoPin=10;     // порт серводвигателя
float servoPos=0;        // позиция серводвигателя
int   servoDelay=0;      // время для движения двигателя на позицию

int   potPin=A0;         // порт потенциометра    
float potValue=0;        // аппроксимированное значение потенциометра
int   potValueJ=0;       // текущее значение потенциометра
int   numberApprox=400;  // число аппроксимаций, примерно 8000 = 1 сек


void setup() {
    pinMode(trigPin, OUTPUT);
    pinMode(echoPin, INPUT);
  
    Serial.begin(115200);        // инициализация серийного порта
    myPointer.attach(servoPin);  // инициализация серводвигателя
    pinMode(potPin, INPUT);      // инициализация порта ввода
}


void loop() {
  
    digitalWrite(trigPin, LOW);
    delayMicroseconds(2000); 
    digitalWrite(trigPin, HIGH);
    delayMicroseconds(10);
    digitalWrite(trigPin, LOW);
    
    pingTime=pulseIn(echoPin, HIGH); // in microseconds
    
    speedOfSound = targetDistance/100./pingTime*1000000.*2.;
    
    Serial.print("Speed of sound is ");
    Serial.print(speedOfSound);
    Serial.println(" meters per second");
    
    delay(1000); // milliseconds;
  
    potValue=0;                  // сброс аппроксимированного значение потенциометра
    for (int j=1; j<=numberApprox; ++j) { // цикл аппроксимации
    potValueJ = analogRead(potPin);
    potValue = potValue + potValueJ;      
    }

    potValue = potValue/numberApprox;     // вычисление среднего 
    Serial.print("Servo position is "); 
    servoPos = 3+potValue/1023.*175.;     // вычисление позиции серво
    Serial.print(servoPos);               // вывод позиции серво на экран
    Serial.println(" degrees");
    
    Serial.print("Potentiometer value is ");
    Serial.println(potValue);             // вывод значения потенциометра на экран
    Serial.println();
    
    myPointer.write(servoPos);            // position should be between 0 and 180
    delay(servoDelay);
}



