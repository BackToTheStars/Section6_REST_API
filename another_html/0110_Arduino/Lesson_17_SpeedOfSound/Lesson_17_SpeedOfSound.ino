
#include <Servo.h>

Servo myPointer;                  // Create a Servo Object

int   trigPin=13;                 // pin ультразвукового передатчика
int   echoPin=11;                 // pin ультразвукового приёмника
float pingTime=0;                 // время, которое возвращает pin ультразвукового приёмника
float speedOfSound=0;             // переменная для вычисления скорости звука
int   targetDistance=20;          // предполагаемое расстояние в сантиметрах

int   servoPin=10;                // порт серводвигателя
float servoPos=0;                 // позиция серводвигателя
int   servoDelay=10;              // время для движения двигателя на позицию

int   potPin=A0;                  // порт потенциометра    
float potValue=0;                 // аппроксимированное значение потенциометра
int   potValueJ=0;                // текущее значение потенциометра
int   numberApprox=1;             // число аппроксимаций, примерно 8000 = 1 сек


void setup() {
    pinMode(trigPin, OUTPUT);     // инициализация порта вывода ультразвукового передатчика
    pinMode(echoPin, INPUT);      // инициализация порта ввода порта ультразвукового приёмника
  
    Serial.begin(115200);         // инициализация серийного порта
    myPointer.attach(servoPin);   // инициализация серводвигателя
    pinMode(potPin, INPUT);       // инициализация порта ввода
}


void loop() {
  
    digitalWrite(trigPin, LOW);  // выключить ультразвуковой порт
    delayMicroseconds(100);      // подождать 0,000100 секунд
    digitalWrite(trigPin, HIGH); // включить ультразвуковой порт
    delayMicroseconds(10);       // послать ультразвуковой сигнал длительностью 0,000010 секунды
    digitalWrite(trigPin, LOW);  // выключить ультразвуковой передатчик
    
    pingTime=pulseIn(echoPin, HIGH); // время, которое возвращает ультразвуковой приёмник, в микросекундах
    
    Serial.print("Время возврата равно ");
    Serial.print(pingTime);
    Serial.println(" микросекунд");
    
    speedOfSound = targetDistance/100./pingTime*1000000.*2.;  // вычисление скорости звука
    
    Serial.print("Speed of sound is ");
    Serial.print(speedOfSound);
    Serial.println(" meters per second");
    
    delay(50); // milliseconds;
  
    potValue=0;                           // сброс аппроксимированного значение потенциометра
    for (int j=1; j<=numberApprox; ++j) { // цикл аппроксимации
    potValueJ = analogRead(potPin);
    potValue = potValue + potValueJ;      
    }

    potValue = speedOfSound;              // = potValue/numberApprox вычисление среднего 
    Serial.print("Servo position is "); 
    servoPos = 3+potValue/1023.*175.      // вычисление позиции серво
    Serial.print(servoPos);               // вывод позиции серво на экран
    Serial.println(" degrees");
    
    Serial.print("Potentiometer value is ");
    Serial.println(potValue);             // вывод значения потенциометра на экран
    Serial.println();
    
    myPointer.write(servoPos);            // position should be between 0 and 180
    delay(servoDelay);
}



