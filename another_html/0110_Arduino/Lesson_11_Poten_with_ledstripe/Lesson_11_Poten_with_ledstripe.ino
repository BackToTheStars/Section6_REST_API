int delayOn;
int delayOff;
int ledVolts=76;

int LED1=13;
int LED2=12;
int LED3=11;
int LED4=10;
int LED5=9;
int LED6=8;
int LED7=7;
int LED8=6;
int LED9=5;
int LED10=4;
int LED11=3;
int LED12=2;
int LED13=1;
int LED14=14;
int LED15=15;
int LED16=16;
int LED17=17;
int LED18=18;
int LED19=19;

int potPin=A0;
int potValue;


void setup() {
    Serial.begin(115200);
    pinMode(potPin, INPUT);
    pinMode(LED1, OUTPUT);
    pinMode(LED2, OUTPUT);
    pinMode(LED3, OUTPUT);
    pinMode(LED4, OUTPUT);
    pinMode(LED5, OUTPUT);
    pinMode(LED6, OUTPUT);
    pinMode(LED7, OUTPUT);
    pinMode(LED8, OUTPUT);
    pinMode(LED9, OUTPUT);
    pinMode(LED10, OUTPUT);
    pinMode(LED11, OUTPUT);
    pinMode(LED12, OUTPUT);
    pinMode(LED13, OUTPUT);
    pinMode(LED14, OUTPUT);
    pinMode(LED15, OUTPUT);
    pinMode(LED16, OUTPUT);
    pinMode(LED17, OUTPUT);
    pinMode(LED18, OUTPUT);
    pinMode(LED19, OUTPUT);
        
}

void loop() {
    potValue=analogRead(potPin);
    Serial.println(potValue);

    delayOn=potValue/5;
    delayOff=potValue/30;
    Serial.println(delayOn);
    
    analogWrite(LED1, delayOn);
    delay(delayOn);
    analogWrite(LED1, 0);
    delay(delayOff);
    
    analogWrite(LED2, delayOn);
    delay(delayOn);
    analogWrite(LED2, 0);
    delay(delayOff);
    
    digitalWrite(LED3, HIGH);
    delay(delayOn);
    digitalWrite(LED3, LOW);
    delay(delayOff);
    
    digitalWrite(LED4, HIGH);
    delay(delayOn);
    digitalWrite(LED4, LOW);
    delay(delayOff);
    
    digitalWrite(LED5, HIGH);
    delay(delayOn);
    digitalWrite(LED5, LOW);
    delay(delayOff);
    
    digitalWrite(LED6, HIGH);
    delay(delayOn);
    digitalWrite(LED6, LOW);
    delay(delayOff);
    
    digitalWrite(LED7, HIGH);
    delay(delayOn);
    digitalWrite(LED7, LOW);
    delay(delayOff);
    
    digitalWrite(LED8, HIGH);
    delay(delayOn);
    digitalWrite(LED8, LOW);
    delay(delayOff);
     
    digitalWrite(LED9, HIGH);
    delay(delayOn);
    digitalWrite(LED9, LOW);
    delay(delayOff);
    
    digitalWrite(LED10, HIGH);
    delay(delayOn);
    digitalWrite(LED10, LOW);
    delay(delayOff);
     
    digitalWrite(LED11, HIGH);
    delay(delayOn);
    digitalWrite(LED11, LOW);
    delay(delayOff);
    
    digitalWrite(LED12, HIGH);
    delay(delayOn);
    digitalWrite(LED12, LOW);
    delay(delayOff);
     
    digitalWrite(LED13, HIGH);
    delay(delayOn);
    digitalWrite(LED13, LOW);
    delay(delayOff);
    
    digitalWrite(LED14, HIGH);
    delay(delayOn);
    digitalWrite(LED14, LOW);
    delay(delayOff);

    
    digitalWrite(LED15, HIGH);
    delay(delayOn);
    digitalWrite(LED15, LOW);
    delay(delayOff);
    
    digitalWrite(LED16, HIGH);
    delay(delayOn);
    digitalWrite(LED16, LOW);
    delay(delayOff);
     
    digitalWrite(LED17, HIGH);
    delay(delayOn);
    digitalWrite(LED17, LOW);
    delay(delayOff);
    
    digitalWrite(LED18, HIGH);
    delay(delayOn);
    digitalWrite(LED18, LOW);
    delay(delayOff);
     
    digitalWrite(LED19, HIGH);
    delay(delayOn);
    digitalWrite(LED19, LOW);
    delay(delayOff);
        
}
