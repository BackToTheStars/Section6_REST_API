void setup() {
  
  Serial.begin(115200);

}

void loop() {
  
  int j=2;
  
  while ( j<=100 ) { 
  Serial.print("you are on loop number ");
  Serial.println(j);
  j=j+5;
  delay(250);
  }

  Serial.println(" ");

}
