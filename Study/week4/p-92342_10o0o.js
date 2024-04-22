function solution(n, info) {
  const memo = new Array(11).fill(0);
  let result = -1;
  let ret = null;

  const updateResult = () => {
    let sum = 0;

    for (let i = 0; i < 11; i += 1) {
      if (info[i] < memo[i]) sum += 10 - i;
      else if (info[i] > memo[i]) sum -= 10 - i;
      else if (info[i]) sum -= 10 - i;
    }

    if (sum > result) {
      ret = [...memo];
      result = sum;
    } else if (sum === result) {
      if (!ret) {
        ret = [...memo];
        result = sum;
      } else {
        for (let i = 10; i >= 0; i -= 1) {
          if (ret[i] > memo[i]) return;
          if (ret[i] < memo[i]) {
            ret = [...memo];
            return;
          }
        }
      }
    }
  };

  const recursive = (left, index) => {
    if (!left || index === 12) {
      updateResult();
      return;
    }

    for (let i = index; i < 12; i += 1) {
      if (info[i] >= memo[i]) {
        const value = Math.min(left, info[i] - memo[i] + 1);
        memo[i] += value;
        recursive(left - value, i + 1);
        memo[i] -= value;
      }
    }
  };

  recursive(n, 0);

  if (result <= 0) return [-1];

  return ret;
}
