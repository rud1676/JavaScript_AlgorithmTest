/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumBeauty = function (nums, k) {
  const points = new Set();

  for (const num of nums) {
    points.add(num - k);
    points.add(num + k + 1);
  }

  const comp = [...points].sort((a, b) => a - b);
  const counts = new Array(comp.length).fill(0);
  const idxMap = new Map();

  for (let i = 0; i < comp.length; i += 1) {
    idxMap.set(comp[i], i);
  }

  for (const num of nums) {
    counts[idxMap.get(num - k)] += 1;
    counts[idxMap.get(num + k + 1)] -= 1;
  }

  for (let i = 1; i < counts.length; i += 1) {
    counts[i] += counts[i - 1];
  }

  return Math.max(...counts);
};