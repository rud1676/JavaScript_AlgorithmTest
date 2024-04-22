const makesquare = function (matchsticks) {
  const sum = matchsticks.reduce((acc, cur) => acc + cur, 0);

  if (sum % 4) return false;

  const n = matchsticks.length;
  const len = sum / 4;

  if (matchsticks.some((el) => el > len)) return false;
  matchsticks.sort((a, b) => b - a);

  const r = (i, a) => {
    if (i === n) {
      return !a.some((el) => el !== len);
    }

    for (let j = 0; j < 4; j += 1) {
      if (a[j] + matchsticks[i] <= len) {
        f2 = 1;
        a[j] += matchsticks[i];
        if (r(i + 1, a)) {
          return true;
        }
        a[j] -= matchsticks[i];
      }
    }

    return false;
  };

  return r(0, [0, 0, 0, 0]);
};