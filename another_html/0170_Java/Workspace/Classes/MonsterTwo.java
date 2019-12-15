import java.util.Arrays;
import org.apache.commons.lang3.ArrayUtils;

// Basic class definition
// "public" means this class can be used by other classes
// Class names begin with Capital Letter
// One file cannot contain two public classes
// It can contain classes that are not public
// If you place class files in the same folder, the java compiler will find them all

public class MonsterTwo {
	
	static char[][] battleBoard = new char[15][15];
	
	public static void buildBattleBoard() {
		
		for (char[] row : battleBoard) {
			
			Arrays.fill(row,  '*');
			
		}
		
	}
	
	public static void redrawBoard() {
		
		int k = 1;
		while (k <= 31) { System.out.print('-'); k++; }
		System.out.println();
		
		for (int i = 0; i < battleBoard.length; i++) {
			
			for(int j = 0; j < battleBoard[i].length; j++) {
				
				System.out.print("|" + battleBoard[i][j]);
				
			}
			System.out.println('|');
			
		}
		k = 1;
		while (k <= 31) { System.out.print('-'); k++; }
		System.out.println();		
	}
	
	
	// Class Variables or Fields
	// You declare constants with "final"
	
	public final String TOMBSTONE = "Here lies a dead monster";
	
	private int health = 500;
	private int attack = 20;
	private int movement = 2;
	private boolean alive = true;

// private fields are not visible outside of the class
// public variables are visible outside of the class	
// you should have as few as possible public fields	
	
	public String name = "Big Monster";
	public char nameChar1 = 'B';
	public int xPosition = 0;
	public int yPosition = 0;
	public static int numOfMonsters = 0;
	
// Class Methods
// Accessor methods are used to get and set the values of private fields	
	public int getAttack() {
		return attack;
	}
	
	public int getMovement() {
		return movement;
	}
	
	public int getHealth() {
		return health;
	}
	
	public boolean getAlive() {
		return alive;
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
	
	// for JavaLesson10
	
	public void moveMonster(MonsterTwo[] monster, int arrayItemIndex) {
		
		boolean isSpaceOpen = true;
		
		int maxXBoardSpace = battleBoard.length - 1;
		int maxYBoardSpace = battleBoard[0].length - 1;
		
		while(isSpaceOpen) {
			
			int randMoveDirection = (int) (Math.random() * 4);
			
		}
		
	}
	
	// constructor
	public MonsterTwo(int health, int attack, int movement, String name) {
		this.health = health;
		this.attack = attack;
		this.movement = movement;
		this.name = name;
	// "this" means the project, constructor is currently working with.
	/* If the attributes had the same names as the class health, attack, movement
	 * You should refer to the objects fields by proceeding them with "this"
	 * this.health = health;
	 * this.attack = attack;
	 * objectFiedlName = attributeFieldName; 	
	 */
		int maxXBoardSpace = battleBoard.length - 1;
		int maxYBoardSpace = battleBoard[0].length - 1;
		int randNumX, randNumY;
		
		do {
			
			randNumX = (int) (Math.random() * maxXBoardSpace);
			randNumY = (int) (Math.random() * maxYBoardSpace);
			
		} while(battleBoard[randNumX][randNumY] != '*');
		
		this.xPosition = randNumX;
		this.yPosition = randNumY;
		
		this.nameChar1 = this.name.charAt(0);
		
		battleBoard [this.yPosition][this.xPosition] = this.nameChar1;
		
		numOfMonsters++;
		
	}
	
	// The following constructor is the one provided by default in Java
	// You can overload constructor as any other method
	
	public MonsterTwo()
	{
		numOfMonsters++;
	}
	
	public MonsterTwo(int newHealth)
	{
		health = newHealth;
	}
	
	public MonsterTwo(int newHealth, int newAttack)
	{
		this(newHealth); // so the value will be passed from previous constructor
		this.attack = newAttack;
	}
	
	public static void main(String[] args)
	{
	}
}



