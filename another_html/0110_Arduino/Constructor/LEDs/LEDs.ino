 
  int led1pin = 2;
  int led2pin = 3;

void setup() 
  {
     pinMode(led1pin, OUTPUT);
     pinMode(led2pin, OUTPUT); 
  }

void loop() 
  {
     analogWrite(led1pin, 140);
     analogWrite(led2pin, 255);
     delay(50);
  }

