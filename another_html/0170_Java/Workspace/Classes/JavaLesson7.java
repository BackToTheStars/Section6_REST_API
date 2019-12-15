public class JavaLesson7 {
	public static void main(String[] args) {
		Monster Frank = new Monster();
		Frank.name = "Frank";
		System.out.println(Frank.name + " has an attack of " + Frank.getAttack());
		// you cannot access private variables, but you can access
		// accessor functions
	}
	
}