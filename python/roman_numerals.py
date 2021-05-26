import math
def to_roman(num):
    # write your code here!
    numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    symbols = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
    output=''
    for x in range(13):
      quo = math.floor(num/numbers[x])
      num=num%numbers[x]
      for y in range(quo):
        output+=symbols[x]
    return output