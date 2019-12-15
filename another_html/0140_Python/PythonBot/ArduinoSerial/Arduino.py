import vpython
from visual import *
import serial

arduinoSerialData = serial.Serial('com5', 9600)

while 1 == 1:
    if (arduinoSerialData.inWaiting()>0):
        myData = arduinoSerialData.readline()
        print (myData)


