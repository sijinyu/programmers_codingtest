//k번째 수

function solution(array, commands) {
  return commands.map(
    (j) => array.slice(j[0] - 1, j[1]).sort((a, b) => a - b)[j[2] - 1]
  );
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
