/**
 * @param {number[]} nums
 * @return {number}
 */

// 생각보다 복잡하네... ㅠ
var removeDuplicates = function (nums) {
  if (nums.length <= 1) return nums.length;

  prev = nums[0];
  let n = nums.length;
  let i = 1;
  let cnt = 1;
  while (n--) {
    if (prev !== nums[i]) {
      cnt = 1;
    } else {
      cnt++;
      if (cnt > 2) {
        const value = nums[i];
        nums.splice(i, 1);
        i--;
      }
    }
    prev = nums[i];
    i++;
  }
};
