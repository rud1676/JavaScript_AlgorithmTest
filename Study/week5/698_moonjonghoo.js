const backtrack = function (nums, taken, k, numCompleted, currentSum, index, target) {
  if (numCompleted == k - 1) {
    return true;
  }

  if (currentSum > target) {
    return false;
  }

  if (currentSum == target) {
    return backtrack(nums, taken, k, numCompleted + 1, 0, 0, target);
  }
  for (let i = index; i < nums.length; i++) {
    if (taken[i] == 0) {
      taken[i] = 1;

      if (backtrack(nums, taken, k, numCompleted, currentSum + nums[i], i + 1, target)) {
        return true;
      }
      taken[i] = 0;
    }
  }

  return false;
};

const canPartitionKSubsets = function (nums, k) {
  let totalSum = nums.reduce((a, b) => a + b, 0);

  if (totalSum % k != 0) {
    return false;
  }

  let target = totalSum / k;

  let taken = Array(nums.length).fill(0);

  return backtrack(nums, taken, k, 0, 0, 0, target);
};
