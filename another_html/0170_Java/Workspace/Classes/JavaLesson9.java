
 import java.util.Arrays;

 public class JavaLesson9 {
	 
	 public static void main(String[] args) {
		 
		 // 1st way to declare an array
		 int[] randomArray;
		 randomArray = new int[20];
		 randomArray[1] = 2;
		 		
		 // 2nd way to declare an array
		 int[] numberArray = new int[10];
		 		 
		 // 3rd way of declaration an array
		 String[] stringArray = {"just", "random", "words"};
		 
		 for (int i = 0; i < numberArray.length; i++) {
			 numberArray[i] = i;
		 }
		 
		 int k = 1;
		 while (k <=41) {System.out.print('-'); k++;}
		 System.out.println();
		 
		 for (int j = 0; j <= numberArray.length; j++) {
			 System.out.print("| " + j + " ");			 
		 }
		 System.out.println("|");
		 
		 String[][] multiArray = new String[10][10];
		 for (int i=0; i<multiArray.length; i++) {
			 for (int j=0; j<multiArray[i].length; j++){
				 multiArray[i][j] = i + " " + j;				 
			 }
		 }	 
		 
		 k = 1;
		 while (k <=61) {System.out.print('-'); k++;}
		 System.out.println();
		 
		 for (int i=0; i<multiArray.length; i++) {
			 for (int j=0; j<multiArray[i].length; j++){
				 System.out.print("| " + multiArray[i][j] + " ");
			 }
			 System.out.println("|");
		 }	 
		 k = 1;
		 while (k <=61) {System.out.print('-'); k++;}
		 System.out.println();
		 
		 for(int row : numberArray) {
			 System.out.print(row);
		 }
		 System.out.println("\n");
		 
		 // enhanced "for" loop
		 for (String[] rows : multiArray) {
			 for (String column : rows) {
				 System.out.print("| " + column + " ");
			 }
			 System.out.println("|");
		 }
		 
		 // COPY part of the array
		 int[] numberCopy = Arrays.copyOf(numberArray, 5);
		 for(int row : numberCopy) {
			 System.out.print(row);
		 }	 
		 System.out.println("\n");

		 // COPY range of the array
		 numberCopy = Arrays.copyOfRange(numberArray, 1, 6);
		 System.out.println(Arrays.toString(numberCopy));
		 
		 // FILL the array with same value
		 int [] moreNumbers = new int[100];
		 Arrays.fill(moreNumbers, 2);
		 
		 // FILL the gameBoard with stars (Lesson 8) using enhanced "for" loop
		 char[][] boardGame = new char[15][15];
		 for (char[] row : boardGame) {
			 Arrays.fill(row, '*');
		 }
		 
		 // Create an array full of random numbers, and sort them in accending order
		 int[] numToSort = new int[10];
		 for (int i=0; i<10; i++) {
			 numToSort[i] = (int) (Math.random() * 100);
		 }
		 Arrays.sort(numToSort);
		 System.out.println(Arrays.toString(numToSort));
		 
		 // BINARY SEARCH - returns number of value if it finds it
		 // will return negative number if value does not exist
		 // will return -"where it would be inserted"
		 int whereIs50 = Arrays.binarySearch(numToSort, 50);
		 System.out.println(whereIs50);
	 }
 }
 
 
 
 