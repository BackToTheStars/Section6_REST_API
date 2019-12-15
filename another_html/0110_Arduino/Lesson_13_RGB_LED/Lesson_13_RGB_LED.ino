int redPin = 11;
int greenPin = 10;
int bluePin = 9;
int brightness = 75; //out of 255

void setup() {
    Serial.begin(115200);
    pinMode(redPin, OUTPUT);
    pinMode(greenPin, OUTPUT);
    pinMode(bluePin, OUTPUT);

}

void loop() {
    analogWrite(redPin, 0);
    analogWrite(greenPin, 0);
    analogWrite(bluePin, brightness);
    delay(100);
    analogWrite(bluePin, 0);
    delay(100);
  
}
