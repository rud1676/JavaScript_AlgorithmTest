function solution(stones, k) {
  let left = 1;
  let right = 200000000;

  while (left <= right) {
    const mid = ((left + right) / 2) >> 0;
    const copy = stones.slice();
    let flag = false;
    let count = 0;

    for (let i = 0; i < copy.length; i++) copy[i] -= mid;

    for (const value of copy) {
      count = value <= 0 ? count + 1 : 0;

      if (count === k) {
        flag = true;
        break;
      }
    }

    flag ? (right = mid - 1) : (left = mid + 1);
  }

  return left;
}
