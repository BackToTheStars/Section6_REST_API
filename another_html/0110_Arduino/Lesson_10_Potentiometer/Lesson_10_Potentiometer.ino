
int potPin=A0;    // assign potPin to A0

void setup() {
    pinMode(potPin,INPUT);           // Declare potPin an input
    Serial.begin(9600);              // Starting serial port
    
}

float potentiometer(int potPin1, int numberApprox) {   // возвращает значение от 0 до 1023
    float result = 0;  
    for (int i=1; i<numberApprox; ++i) {           // цикл аппроксимации
         int potValue = analogRead(potPin1);
         result = result + potValue;      
    }
    result = result/numberApprox;                   // вычисление среднего значения потенциометра
    return result;
}

void loop() {
  
    Serial.println(potentiometer(potPin, 8000));     // print results
    delay(50);                                      // delay 50 milliseconds
}
