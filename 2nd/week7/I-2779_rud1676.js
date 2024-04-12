/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function (nums, k) {
  const sumarr = Array(300005).fill(0);
  for (let n of nums) {
    sumarr[n] += 1;
    sumarr[n + k * 2 + 1] += -1;
  }

  //make nujuc
  let sum = 0;
  for (let i = 0; i < sumarr.length; i++) {
    sum += sumarr[i];
    sumarr[i] = sum;
  }

  let max = 0;
  for (let n of sumarr) {
    max = Math.max(max, n);
  }
  return max;
};
