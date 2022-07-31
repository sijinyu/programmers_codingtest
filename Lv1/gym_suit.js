// 체육복

function solution(n, lost, reserve) {
  var answer = n - lost.length;

  let realLost = lost.filter((l) => !reserve.includes(l));
  let realReserve = reserve.filter((r) => !lost.includes(r));
  answer += lost.length - realLost.length;
  realLost.sort((a, b) => a - b);
  realReserve.sort((a, b) => a - b);

  for (i = 0; i < realLost.length; i++) {
    if (realReserve.length === 0) {
      break;
    }
    if (realReserve.includes(realLost[i] - 1)) {
      realReserve = realReserve.filter((r) => r !== realLost[i] - 1);
      answer++;
    } else if (realReserve.includes(realLost[i] + 1)) {
      realReserve = realReserve.filter((r) => r !== realLost[i] + 1);
      answer++;
    }
  }

  return answer;
}
