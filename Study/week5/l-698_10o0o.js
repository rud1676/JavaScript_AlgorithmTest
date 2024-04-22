const canPartitionKSubsets = function (nums, k) {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);

  if (sum % k) return false;
  const avg = sum / k;
  nums.sort((a, b) => b - a);
  const n = nums.length;
  const s = new Array(k).fill(0);

  const r = (i) => {
    if (i === n) {
      return !s.some((el) => el !== avg);
    }

    let sCache = -1;

    for (let j = 0; j < k; j += 1) {
      if (sCache !== s[j] && s[j] + nums[i] <= avg) {
        sCache = s[j];
        s[j] += nums[i];
        if (r(i + 1)) return true;
        s[j] -= nums[i];
      }
    }

    return false;
  };

  return r(0);
};
