
// Объявление глобальных переменных

    int redLED=6;                       // blue connected to 7 pin
    int greenLED=3;
 
void setup() { 
  
    pinMode(redLED, OUTPUT);            // синий LED на 10 пине, вывод
    pinMode(greenLED, OUTPUT);
 
}

void loop() {

    for (int i=1; i<=8; ++i) {
        analogWrite(redLED, 20);            // подать напряжение на 7 пин
        delay(50);
        analogWrite(redLED, 0);             // выключить 7 пин
        delay(70);
    }
    delay(500);
  
      for (int i=1; i<=6; ++i) {
        analogWrite(greenLED, 250);
        delay(150);
        analogWrite(greenLED, 0);
        delay(150);
    }
    delay(500);

}


