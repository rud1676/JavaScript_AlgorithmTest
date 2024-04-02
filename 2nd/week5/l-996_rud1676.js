/**
 * @param {number[]} nums
 * @return {number}
 */
var numSquarefulPerms = function (nums) {
  let n = nums.length;
  let vst = Array(n).fill(0);
  let res = 0;
  function go(cur, count) {
    if (count === n) {
      res++;
      return;
    }
    for (let i = 0; i < n; i++) {
      if (vst[i] || (i > 0 && nums[i] === nums[i - 1] && !vst[i - 1])) continue; // 중복 조합이 문제넹...
      if (count === 0 || check(cur, nums[i])) {
        vst[i] = 1;
        go(nums[i], count + 1);
        vst[i] = 0;
      }
    }
  }

  function check(a, b) {
    let ck = Math.sqrt(a + b);
    return ck === Math.floor(ck); // 제곱수는 정수로 나옴. 정수판별을 위한 식
  }
  nums.sort((a, b) => a - b);
  go(0, 0);
  return res;
};
