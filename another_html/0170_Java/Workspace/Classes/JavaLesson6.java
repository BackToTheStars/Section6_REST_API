/* java.lang.RunTimeException - during program running
 * java.lang.Exception - during compiling
 * ArithmeticException - for example division by zero
 * ClassNotFoundException - when calls for class which does not exist
 * IllegalArgumentException
 * IndexOutOfBoundsException
 * InputMismatchException
 * IOException
 */

import java.util.*;
import java.io.*;

public class JavaLesson6 {
	static Scanner userInput = new Scanner(System.in);
	public static void main(String[] args) {
		divideByZero(2);
		System.out.print("How old are you? ");
		int age = checkValidAge();
		if (age != 0) {
			System.out.println("You are " + age + " years old.");
		}
		try {
			getAFile("./some_file.txt");
		}
		catch(FileNotFoundException e) {
			System.out.println ("System returns an error, no such file");
		}
	}

	public static void divideByZero(int a) {
		try {
			System.out.println(a/0);
		}
		
		catch (ArithmeticException e) {
			System.out.println("You cannot do that");
			System.out.println(e.getMessage()); // way 1 to see error
			System.out.println(e.toString());   // way 2 to see error
			e.printStackTrace();                // way 3 to see error  
		}
	}
	
	public static int checkValidAge() {
		try {
			return userInput.nextInt();
		}
		catch (InputMismatchException e) {
			userInput.next();
			System.out.println("That's not a whole number");
			return 0;
		}
	}
	
	public static void getAFile(String fileName) throws FileNotFoundException {
	// throws error to main function to handle it	
		try {
			FileInputStream file = new FileInputStream(fileName);
		}
		catch(Exception e) {
			System.out.println("Some error occurred.");
		}
		finally {   // finally always called once
			System.out.println("");
		}
	}
}