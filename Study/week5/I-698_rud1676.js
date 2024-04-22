/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  // 총 합을 구한다
  // 그 합을 기반으로 찾는다.
  // for
  // null,null,null,null,
  // 답지를 봤으니 다시 풀어보자.
  let n = nums.length;
  let total = nums.reduce((acc, cur) => acc + cur, 0);
  if (total % k != 0) return false;

  let subset = total / k;
  let mp = new Map();
  function go(idx, sum, count) {
    if (count + 1 === k) return true;
    const str = nums.join();
    console.log(str, count);
    if (mp.has(str)) return false;
    if (sum === subset) return go(0, 0, count + 1);
    if (sum > subset) return false;

    for (let i = idx; i < n; i++) {
      if (nums[i] === null) continue;
      const temp = nums[i];
      nums[i] = null;
      if (go(idx + 1, sum + temp, count)) return true;
      nums[i] = temp;
    }
    mp.set(str, false);
    return false;
  }
  return go(0, 0, 0);
};
