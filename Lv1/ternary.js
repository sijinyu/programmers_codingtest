function solution(n) {
  const treeNum = n.toString(3).split("").reverse().join("");
  return parseInt(treeNum, 3);
}
