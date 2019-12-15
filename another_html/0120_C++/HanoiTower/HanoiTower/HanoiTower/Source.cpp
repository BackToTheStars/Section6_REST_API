// Recursion algorithm "HANOI TOWERS"

#include <iostream>
#include <windows.h>
using namespace std;
void move(int, int, int, int);

int main()
{   SetConsoleDisplayMode(GetStdHandle(STD_OUTPUT_HANDLE), CONSOLE_FULLSCREEN_MODE, 0);
	int num;
	cout << endl << "   Enter the number of disks: ";
	cin >> num; 
	cout << endl << "**************************************" << endl << endl;
	move(num, 1, 3, 2);
	cout << endl << "**************************************" << endl << endl;
	system("Pause");
	return 0;
}

void move(int count, int n1, int n3, int n2)
{	if (count > 0)
    {   
	    move(count - 1, n1, n2, n3);
		cout << "   Moving disk " << count << " from " << n1 << " to " << n3 << "." << endl;
		move(count - 1, n2, n3, n1); 
	}
}


