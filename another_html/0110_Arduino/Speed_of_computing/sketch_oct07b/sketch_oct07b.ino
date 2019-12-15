unsigned long i=7;

void setup()
{
  Serial.begin(250000);
}

void loop()
{ 
   i = i + 47;
   Serial.println(i);
}
