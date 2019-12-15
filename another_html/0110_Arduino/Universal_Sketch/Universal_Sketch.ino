int redLED=9;     // Объявление переменных
int blueLED=10;
int greenLED=8;
int potPin=A0;
float X;

void setup() {
  
  Serial.begin(115200);
  
  pinMode(potPin, INPUT);
  
  pinMode(redLED, OUTPUT);
  pinMode(blueLED, OUTPUT);

}

void loop() {

  Serial.println("Welcome to my program");
  analogRead(potPin);
  
  while(Serial.available()==0) {}
  X = Serial.parseInt();

  digitalWrite(redLED, HIGH); // HIGH or LOW
  analogWrite(greenLED, 100); // 0-255
  
}
