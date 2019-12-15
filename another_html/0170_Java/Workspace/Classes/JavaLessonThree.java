
 public class JavaLessonThree { // relational and logical operators
	 
	 public static void main(String[] args) {
		
		 int randomNumber = (int) (Math.random() * 50);
		 
		 /* Relational operators
		  * Java has 6 relational operators
		  *    >   Greater than
		  *    <   Less than
		  *    ==  Equal to
		  *    !=  Not equal to
		  *    >=  Greater than or equal to
		  *    <=  Less than or equal to		 
		 */
		 
		 if (randomNumber < 18) {
			 System.out.println("The random number is less than 18");
		 }
		 else if (randomNumber <= 25) {
			 System.out.println("The random number is less or equal to 25");
		 }
		 else if (randomNumber != 40) {
			 System.out.println("The random number is not equal to 40");
		 }
		 else if (randomNumber > 40) {
			 System.out.println("The random number is greater than 40");
		 }
		 else
			 System.out.println("Nothing Worked");
		 // once condition is true, operator break the execution
		 
		 System.out.println("The random number is " + randomNumber);
		 
		 /* Logical operators
		  * Java has 6 logical operators
		  *      !   inversion "наоборот"
		  *      &   
		  *      &&  and "оба да"
		  *      |   or  "хотя бы один да" 
		  *      ||   
		  *      ^   xor, "разные", one true and one false then true, else false
		  */
		 if (!(false)) 
			 System.out.println("\nI turned false into true");
		 
		 if ((false) && (true))
			 System.out.println("Both are true");
		 
		 int valueOne = 1;
		 int valueTwo = 2;
		 int biggestValue = (valueOne > valueTwo) ? valueOne : valueTwo;
		 System.out.println(biggestValue);
		 
		 char theGrade = 'A';
		 
		 switch (theGrade) {
		 case 'A':
			 System.out.println("Great job");
			 break;
		 case 'B':
		 case 'b':
	  		 System.out.println("Good job");
	  		 break;
		 case 'C':
	  		 System.out.println("Ok");
	  		 break;
		 case 'D':
	  		 System.out.println("Bad");
	  		 break;
		 default:
	  		 System.out.println("You failed");
	  		 break;
	 	 }
		 
	} 
} 