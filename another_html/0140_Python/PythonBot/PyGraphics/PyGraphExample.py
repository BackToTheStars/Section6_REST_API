
import sys
import turtle

def main(argv):

screen = turtle.Screen()                        # Create screen and turtle.
screen.title('Square Demo')                     # Name of the screen
screen_x, screen_y = screen.screensize()
t = turtle.Turtle()                             # Create turtle
# t.speed(0)                                    # Uncomment to draw the graphics as quickly as possible.


if __name__ == "__main__":
	main(sys.argv[1:])