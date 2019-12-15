
// Объявление глобальных переменных

    int blueLED=6;                       // blue connected to 6 pin
 
void setup() { 
  
    pinMode(blueLED, OUTPUT);            // синий LED на 10 пине, вывод
 
}

void loop() {

    for (int i=1; i<=15; ++i) {
        analogWrite(blueLED, 100);            // подать напряжение на 6 пин
        delay,100);
        analogWrite(blueLED, 0);             // выключить 6 пин
        delay(200);
    }
  delay(2000);
}


