
    int redLED=9;          // red LED is connected to 9 pin
    int yellowLED=10;      // yellow connected to 10 pin
    int onTimeRed=500;     // сколько времени горит красный LED 
    int offTimeRed=500;    // сколько времени не горит красный LED
    int onTimeYellow=250;  // сколько времени горит жёлтый LED
    int offTimeYellow=250; // сколько времени не горит жёлтый LED
    int numRedBlink=5;     // число миганий красным
    int numYellowBlink=3;  // число миганий жёлтым
    String redMessage="The red LED is blinking";
    String yellowMessage="Now yellow";
    
void setup() { 
    String wm1="Hello, welcome to";
    String wm2=" my program";    // присвоение значения строки
    String wm3;                  // объявление строковой переменной 
    wm3=wm1+wm2;                 // сложение двух строк
    
    Serial.println(wm3);

    pinMode(redLED, OUTPUT);     // красный LED на 9 пине, вывод
    pinMode(yellowLED, OUTPUT);  // жёлтый LED на 10 пине, вывод
    Serial.begin(9600);          // инициализация COM порта, частота 9600

}

void loop() {  // put your main code here, to run repeatedly:

Serial.println(redMessage); // печать на COM порт

for (int j=1; j<=numRedBlink; j=j+1) {
    Serial.print(j);                        // print - печать в одну строку
    digitalWrite(redLED,HIGH);              // подать 5В на 9 пин
    delay(onTimeRed);                       // подержать 500 мс
    digitalWrite(redLED,LOW);               // выключить 5В на 9 пине
    delay(offTimeRed);                      // подержать 500 мс
    }

Serial.println(" ");                    // println - печать с новой строки
Serial.println(yellowMessage);

for (int j=1; j<=numYellowBlink; j=j+1) {
    Serial.println(j);
    digitalWrite(yellowLED,HIGH);           // подать 5В на 10 пин
    delay(onTimeYellow);
    digitalWrite(yellowLED,LOW);            // выключить 10 пин
    delay(offTimeYellow);
    }

}


