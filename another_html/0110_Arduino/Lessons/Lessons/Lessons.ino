
// Объявление глобальных переменных

    int redLED=9;                // red LED is connected to 9 pin
    int yellowLED=10;            // yellow connected to 10 pin
    int onTimeRed=500;           // сколько времени горит красный LED 
    int offTimeRed=500;          // сколько времени не горит красный LED
    int onTimeYellow=250;        // сколько времени горит жёлтый LED
    int offTimeYellow=250;       // сколько времени не горит жёлтый LED
    int numRedBlink;             // число миганий красным
    int numYellowBlink;          // число миганий жёлтым
    String redMessage="The red LED is blinking";
    String yellowMessage="Now yellow:";
    
void setup() { 
  
    String wm1="Hello, welcome to";
    String wm2=" my program";            // присвоение значения строки
    String wm3;                          // объявление строковой переменной 
    wm3=wm1+wm2;                         // сложение двух строк
    
    Serial.println(wm3);

    pinMode(redLED, OUTPUT);             // красный LED на 9 пине, вывод
    pinMode(yellowLED, OUTPUT);          // жёлтый LED на 10 пине, вывод
    Serial.begin(9600);                  // инициализация COM порта, частота 9600
    
    Serial.println("How many times you want the red LED to blink? ");  
    while (Serial.available()==0) { }    // посмотри, ввёл ли user что-либо
    numRedBlink = Serial.parseInt();     // внимательно, это ввод integer
                                         // есть ещё Serial.parseFloat
                                         // и        Serial.readString

    Serial.println("How many times you want the yellow LED to blink? ");  
    while (Serial.available()==0) { }    // посмотри, ввёл ли user что-либо
    numYellowBlink = Serial.parseInt();  // внимательно, это ввод integer

}

void loop() {

Serial.println(redMessage);                 // печать на COM порт
int j=1;
while (j<=numRedBlink) {
    Serial.print(j);                        // print - печать в одну строку
    digitalWrite(redLED,HIGH);              // подать 5В на 9 пин
    delay(onTimeRed);                       // подержать 500 мс
    digitalWrite(redLED,LOW);               // выключить 5В на 9 пине
    delay(offTimeRed);                      // подержать 500 мс
    j=j+1;
    }

Serial.println(" ");                        // println - печать с новой строки
Serial.println(yellowMessage);

for (int j=1; j<=numYellowBlink; j=j+1) {
    Serial.println(j);
    digitalWrite(yellowLED,HIGH);           // подать 5В на 10 пин
    delay(onTimeYellow);
    digitalWrite(yellowLED,LOW);            // выключить 10 пин
    delay(offTimeYellow);
    }

}


