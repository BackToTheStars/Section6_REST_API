
void setup()
{

}
void loop()
{ 
  Serial.begin(9600);                    // era beginSerial
  Serial.write(" Hello");                // print text to the current cursor position
  Serial.write("Arduino");
  delay(1000);
}
