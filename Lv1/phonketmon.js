function solution(nums) {
  var answer = 0;
  const num = nums.length / 2;
  const array = [...new Set(nums)];
  return num < array.length ? num : array.length;
}
