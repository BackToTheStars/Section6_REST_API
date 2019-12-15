import java.util.Arrays;
import org.apache.commons.lang3.ArrayUtils;

public class JavaLesson10 {
	
	public static void main(String[] args) {
		
		MonsterTwo.buildBattleBoard();
		
		char[][] tempBattleBoard = new char[15][15];
		
		//Object[] ArrayName = new ObjectName[4];
		
		MonsterTwo[] Monsters = new MonsterTwo[5];
		
		 //	public MonsterTwo(int health, int attack, int movement, String name) {

		Monsters[0] = new MonsterTwo(1000, 20, 1, "Frank");
		Monsters[1] = new MonsterTwo(500, 40, 2, "Drac");
		Monsters[2] = new MonsterTwo(1000, 20, 1, "Paul");
		Monsters[3] = new MonsterTwo(1000, 20, 1, "George");
		Monsters[4] = new MonsterTwo(1000, 20, 1, "Mary");

		MonsterTwo.redrawBoard();
	
		// Enhanced "for" statement for cycling
	
		for (MonsterTwo m: Monsters) {
		
			if (m.getAlive()) {
			
				int arrayItemIndex = ArrayUtils.indexOf(Monsters,  m);
				m.moveMonster(Monsters, arrayItemIndex);
						
			}
		
		}
			
		MonsterTwo.redrawBoard();
	}
}