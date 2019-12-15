import time
from turtle import *

penup()
goto(10,10)
pendown()
pensize(4)
pencolor('red')
forward(100)
right(90)
forward(20)
time.sleep(5)                  

"""
penup()
goto(50,50)                  	#Move starting point right and up
pendown()
pencolor('red')
pensize(4)
forward(10)
backward(10)
right(90)
left(30)
penup()                        	#Move to new corner as starting point
pendown()
goto(50,50)      
penup()
setheading(0)   				#Face the turtle to the right
pencolor('red')
pensize(3)
pendown()
circle(-80,90)  				# minus sign to draw clockwise
time.sleep(5)                   # wait 15 seconds
"""