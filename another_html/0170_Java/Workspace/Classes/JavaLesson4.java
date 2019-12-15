import java.util.Scanner;

public class JavaLesson4 { // looping
	
	static Scanner userInput = new Scanner(System.in);	// monitors the keyboard
	static Scanner userInput2 = new Scanner(System.in);
	
	public static void main(String[] args) {
		
		int i = 1;
		
		while(i <= 100000) {
			
			if (i == 99955) {
				i = i + 2;     // we can write i+=2;
				continue;      // this will jump back to while loop.
			}
			
			System.out.println(i);
			i++;
			
			if ((i%2) == 0) {  // checks if the i number is odd, чётное число 
				i++;
			}
			
			if (i > 99983) {
				break;
			}
			
		}
		
		System.out.print("\nNow I will proceed with calculation of PI (true/false): ");
	    
		if (userInput.hasNextBoolean()) {
			
			boolean numberEntered = userInput.nextBoolean();
			if ( numberEntered == true) {
				// calculation of PI
				// PI = 4 - 4/3 + 4/5 - 4/7 + 4/9 - ... - 4/n + 4/(n+1)
		
				double myPi = 4.0;
		
				double j = 3.0;
		
				while (j < 500000) {
			
					myPi = myPi - (4/j) + (4/(j+2));
					j+=4;
					System.out.println("number of Pi: " + myPi);
				}
				
				System.out.println("Value of PI:  " + Math.PI);
			}
		}

		String contYorN = "Y";
		int h = 1;
		
		while (contYorN.equalsIgnoreCase("y")) {
			System.out.println(h);
			System.out.print("Continue y or n? ");
			contYorN = userInput2.nextLine();
			h++;
		}
		
		int k = 100000;
		
		do { // executes first, checks second
			System.out.println(k);
			k++;
		} while (k < 10);
		
		// for (declare iterator; conditional statement; change iterator up or down) {   }
	
		// we declare l inside cycle 
		for (int l = 10; l >= 1; l--) {
			System.out.println(l);
		}
		
		int m, n; // we declare them before cycle
		for (m=1, n=2; m <= 9; m+=2, n+=2) {
			System.out.println(m + "\n" + n);
		}
		
	}
	
}