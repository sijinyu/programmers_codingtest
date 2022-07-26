function solution(numbers) {
  var answer = 0;

  answer = 45 - numbers.reduce((acc, v) => (acc += v), 0);
  return answer;
}
