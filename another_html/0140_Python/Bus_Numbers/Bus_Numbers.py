
limit = 99999

for x in range(limit):
    a = x // 10000
    b = (x % 10000) // 1000
    c = ((x % 10000) % 1000) // 100
    d = (((x % 10000) % 1000) % 100) // 10
    e = (((x % 10000) % 1000) % 100) % 10
    if a+b+c+d+e == a*b*c*d*e:
        print(a, b, c, d, e)
        
        

