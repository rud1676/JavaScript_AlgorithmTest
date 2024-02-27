function solution(nums) {
  var answer = 0;
  let hash = new Set();
  for (let i = 0; i < nums.length; i++) {
    hash.add(nums[i]);
  }
  answer = nums.length / 2;
  answer = Math.min(answer, hash.size);
  return answer;
}

console.log(solution([3, 1, 2, 3]));
