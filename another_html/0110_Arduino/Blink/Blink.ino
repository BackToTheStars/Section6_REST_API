unsigned long x;

void setup() {
    // initialize digital pin LED_BUILTIN as an output.
    pinMode(4, OUTPUT);
    Serial.begin(9600); 
    delay(2000);
    Serial.println("--- Started Serial Monitor ---");
    x = 0;
}

void loop() {
    digitalWrite(4, HIGH);  // turn the LED on (HIGH is the voltage level)
    Serial.print(" RELAY ON ");
    Serial.print(x);
    delay(3000);                      // wait for a second
    x++;                              // increment x
    
    digitalWrite(4, LOW);   // turn the LED off by making the voltage LOW
    Serial.print(" RELAY OFF ");
    Serial.print(x);
    delay(3000);                      // wait for a second
    x++;                              // increment x
    Serial.println();                 // End the line
}
