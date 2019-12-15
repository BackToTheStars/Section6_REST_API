import java.util.Scanner;
import java.util.*;  //imports all utilities (not nesessary now)

public class JavaLessonTwo
{
	 static Scanner userInput = new Scanner(System.in);
	 
	 public static void main(String[] args)
	 // void does not return a value when finish
	 // static means only a class can call this statement to execute
	 	 {
		 System.out.print("Your favorite number: ");
		 // does not do carret return after printing
		 
		 if (userInput.hasNextInt())
		 // this means "if the next thing user inputs with keyboard is an integer"
		 // can be:   .hasNextDouble .hasNextFloat .hasNextBoolean .hasNextByte .hasNextLong .hasNextShort .hasNextLine for String	 
		 { // this called curly braces or brackets
			 int numberEntered = userInput.nextInt();
			 // or nextDouble(), or nextFloat(), or nextLine etc. 
		     System.out.println("You entered " + numberEntered);
		     int numberEnteredTimes2 = numberEntered + numberEntered;
		     System.out.println(numberEntered + " + " + numberEntered + " = " + numberEnteredTimes2);
		     // +, -, *, /
		     int numberEnteredRemainder = numberEntered % 2;
		     System.out.println(numberEntered + " % 2 = " + numberEnteredRemainder);
		     // remainder after division
		     
		     numberEntered +=2;
		     numberEntered -=2;
		     
		     //increment and decrement
		     numberEntered--;
		     numberEntered++;
		     
		     int numberABS = Math.abs(numberEntered); // absolute value
		     int whichIsBigger = Math.max(5, 7);      // 7
		     int whichIsSmaller = Math.min(5, 7);     // 5
		     
		     double numSqrt = Math.sqrt(5.23);        // square root
		     System.out.println(numSqrt);
		     
		     // rounding up, down, usual
		     int numCeiling = (int) Math.ceil(5.23);  // 6
		     int numFloor = (int) Math.floor(5.23);   // 5
		     int numRound = (int) Math.round(5.63);   // 6
		     
		     // random
		     int randomNumber = (int) (Math.random() * 1000);
		     System.out.println("Random number is " + randomNumber);
		     		     
		 } else {
			 
			 System.out.println("Enter an integer next time");
			 
		 }
		 
	 }
}