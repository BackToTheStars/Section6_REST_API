
public class App
{	
	static String randomString = "String to print"; 
	static final double PINUM = 3.141529;  // final = constant
	public static void main(String[] args) 
	// "static" means this function "main" can be called only by this class "App"
	// "void" means this function "main" does not return any values after it done executing
	{
		System.out.println(PINUM);
		int integerOne = 22;             // declaration
		int integerTwo = integerOne + 1; // expression
		System.out.println(integerTwo);
		System.out.println(' ');

// ************** variables types **********************************************************		
		byte bigByte = 127;              // min is -128
		short bigShort = 32767;          // min is -32768
		int bigInt = 2100000000;         
		long bigLong = 9220000000000000000L;
		float bigFloat = 3.14F;  // max is machine dependent
		double bigDouble = 3.145764909661254785793498D;
		                         // can write without D
		boolean trueOrFalse = true;
		
		System.out.println(Float.MAX_VALUE);
		System.out.println(Double.MAX_VALUE);
		System.out.println(' ');

// ************** different char values ****************************************************		
		char randomChar = 69;
		char anotherChar = 'A';
		System.out.println(randomChar);
		char escapedChars = '\\';
		//   '\b' - backspace
		//   '\f' - formfeed
		//   '\n' - linefeed
		//   '\r' - carretreturn
		//   '\t' - horizontal tab
		//   '\"' - double quote
		//   '\'' - single quote
		//   '\\' - backslash

// ************** adding strings ************************************************************		
		String randomString = "I'm a random string";
		String anotherString = "Stuff";
		String andAnotherString = randomString + ' ' + anotherString;
		System.out.println(andAnotherString);
		System.out.println(' ');


// ************** conversion from numbers to string *****************************************		
		String byteString = Byte.toString(bigByte);
		String shortString = Short.toString(bigByte);
		String intString = Integer.toString(bigByte);
		String longString = Long.toString(bigByte);
		String floatString = Float.toString(bigByte);
		String doubleString = Double.toString(bigByte);
//		String booleanString = Boolean.toString(bigByte);

//*************** conversion from number to number *******************************************	
		double aDoubleValue = 3000000000000000000.146047635563457567;
		int doubleToInt = (int) aDoubleValue;
		System.out.println(doubleToInt);
		System.out.println(' ');
// you can use also (byte) (short) (long) (double)		
		
// ************** conversion from string to numbers ******************************************
		int stringToInt = Integer.parseInt(intString);
		System.out.println(stringToInt);
// also parseShort, parseLong, parseByte, parseFloat, parseDouble, parseBoolean
		
	}
}