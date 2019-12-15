public class Monster {
	
	public final String TOMBSTONE = "Here lies a dead monster";
	
	private int health = 500;
	private int attack = 20;
	private int movement = 2;
	private int xPosition = 0;
	private int yPosition = 0;
	private boolean alive = true;

	public String name = "Big Monster";
	
	public int getAttack() {
		return attack;
	}
	
	public int getMovement() {
		return movement;
	}
	
	public int getHealth() {
		return health;
	}
	
	public void setHealth(int decreaseHealth) {
		health = health - decreaseHealth;
		if (health < 0) {
			alive = false;
		}
	}
	
	public void setHealth(double decrease) { 
	// overloaded method, uses double, floats of any other instead of an int
		int intDecreaseHealth = (int) decrease;
		health = health - intDecreaseHealth;
		if (health < 0) {
			alive = false;
		}
	}
	
	// constructor
	public Monster(int health, int attack, int movement) {
		this.health = health;
		this.attack = attack;
		this.movement = movement;
	// "this" means the project, constructor is currently working with.
	}
	
	// Default constructor
	public Monster()
	{
				
	}
	
	public Monster(int newHealth)
	{
		health = newHealth;
	}
	
	public Monster(int newHealth, int newAttack)
	{
		this(newHealth); // so the value will be passed from previous constructor
		this.attack = newAttack;
	}
	
	public static void main(String[] args)
	{
		Monster Frank = new Monster();
		System.out.println(Frank.attack); // printed protected variable because inside of the class (private)
	}
}



