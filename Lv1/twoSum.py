
from collections import Counter
def solution(numbers):
    answer = []
    array = []
    for i in range(len(numbers) - 1):
        for j in range(1 + i, len(numbers)):
                array.append(numbers[i] + numbers[j])
    for v in array:
        if v not in answer:
            print(v)
            answer.append(v)
    answer.sort()
    return answer


def test ():
    n = int(input())
    b = int(input())

    if(n > 0 and b >0): print(1)
    if(n < 0 and b >0): print(2)
    if(n < 0 and b < 0):print(3)
    if(n > 0 and b < 0):print(4)

def test1():
    start , end = map(int,input().split())
    neetTime = int(input())

    end += neetTime
    20 + 30
    M += 30 % 60 

    if(end > 59): start += end // 60
    if(start >= 24): start= start - 24
    end = end % 60

    print(start,end)
        
def test2():
    A, B = map(int,input().split())
    C = int(input())
    A += C // 60
    B += C % 60
    print(A,B)
    if B >= 60 :
        A+=1
        B-=60

    if A >= 24 :
        A-=24

    print('%d %d' % (A,B))


def test3():
    a,b,c = map(int,input().split())
    if a == b == c:
        print(10000 + a*1000)
    elif a == b or a == c:
        print(1000 + a*100)
    elif b == c:
        print(1000 + b*100)
    else:
        print(max(a,b,c) * 100)
    

def test4():
    N = int(input())

    for i in range(9):
        print(f"{N} * {i + 1} = {N * (i + 1)}")
    
def test5():
    n = int(input())
    while(n > 0):
        x,y = map(int,input().split())
        print(x+y)
        n -= 1

def test6():
    n = int(input())
    for i in range(n):
        i = i + 1
        print(f"{' '*(n-i)}{'*' * i}")
# test6()

def test7():
    x,y = map(int,input().split())
    nums = list(map(int,input().split()))

    for i in range(x):
        if nums[i] < y:
            print(nums[i], end= ' ')

def test8():
    n = int(input())
    num = n
    cnt = 0

    while True:
        a = num // 10
        b = num % 10
        c = (a + b) % 10
        num = b * 10 + c
        cnt += 1
        if(n == num): break

def test9():
    n = int(input())
    array = list(map(int,input().split()))
    print(min(array), max(array))
        # print(max(lists),min(lists),end=" ")

test9()