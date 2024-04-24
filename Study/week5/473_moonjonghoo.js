var makesquare = function (M) {
  let n = M.length,
    side = M.reduce((a, c) => a + c) / 4;
  M.sort((a, b) => b - a);
  if (side !== ~~side || M[0] > side) return false;
  const btrack = (i, space, done) => {
    if (done === 3) return true;
    for (; i < n; i++) {
      let num = M[i],
        res;
      if (num > space) continue;
      M[i] = side + 1;
      if (num === space) res = btrack(1, side, done + 1);
      else res = btrack(i + 1, space - num, done);
      if (res) return true;
      M[i] = num;
      while (M[i + 1] === num) i++;
    }
    return false;
  };
  return btrack(0, side, 0);
};
