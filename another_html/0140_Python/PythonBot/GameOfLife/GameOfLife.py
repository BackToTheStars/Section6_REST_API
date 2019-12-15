import time
import random
import copy
import os


black_square_symbol = chr(int('25A0', 16))  # a nice unicode black square symbol


def get_cell_state(table, row, col):
    if row in range(len(table)) and col in range(len(table[0])):
        # little hack to return 0 if row and col are out of rang
        return 1 if table[row][col] else 0
    return 0


def get_neighboring_cells(table, row, col):
    sum = 0
    for row_shift in (-1, 0, 1):
        for col_shift in (-1, 0, 1):
            if row_shift or col_shift:
                #  checking for funcion to not check the state of the cell itself
                sum += get_cell_state(table, row + row_shift, col + col_shift)
    return sum


def generate_table(height, width, rand_seed=time.time()):
    random.seed(rand_seed)  #  giving a seed if user specifies
    table = [[None] * width for _ in range(height)]  # generating the table frame
    for row in range(height):
        for col in range(width):
            table[row][col] = random.choice([True, False])
    return table


def update_table(table, height, width):
    new_table = copy.deepcopy(table)  # deep copy to avoid mutability issues
    for row in range(height):
        for col in range(width):
            neighboring_cells = get_neighboring_cells(table, row, col)
            if neighboring_cells < 2 and table[row][col]:
                # underpopulation
                new_table[row][col] = False
            elif neighboring_cells > 3 and table[row][col]:
                # overpopulation
                new_table[row][col] = False
            elif neighboring_cells == 3 and not table[row][col]:
                # replication
                new_table[row][col] = True
    return new_table


def print_table(table):
    os.system('cls')  # clearing up the screen to print new table
    for row in table:
        for elem in row:
                print(black_square_symbol if elem else ' ', end='')
        print()  # newline


def main():
    os.system('color f0')  # making the background white and text black
    height = 20 #int(input('Enter table width: '))
    width =  30 #int(input('Enter table height: '))
    rand_seed = input('Enter seed to generate the table(leave blank if dont want to specify')
    if rand_seed:
        table = generate_table(width, height, float(rand_seed))
    else:
        table = generate_table(width, height)
    year = 0
    while True:
        print_table(table)
        print('year:', year)
        year += 1
        table = update_table(table, height, width)
        time.sleep(1)


if __name__ == '__main__':
    main()