
import sys, time

def main(argv):

	x = 0

	while True:
		x = x + 1
		print x
		time.sleep(0.00001) 

if __name__ == "__main__":
	main(sys.argv[1:])