import numpy;

def solution(a, b):
    arr = numpy.array(a)
    newarr = numpy.multiply(arr, b).sum().item()
    print(newarr)
    return newarr


# 파이썬도 재밌따