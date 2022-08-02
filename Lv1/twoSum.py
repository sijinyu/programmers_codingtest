//두 개 뽑아서 저장하기

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