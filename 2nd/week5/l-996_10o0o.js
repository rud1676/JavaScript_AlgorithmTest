const isSquare = (x) => Number.isInteger(Math.sqrt(x));

const numSquarefulPerms = function (nums) {
  const n = nums.length;
  const g = new Array(n).fill().map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      if (isSquare(nums[i] + nums[j])) {
        g[i][j] = 1;
        g[j][i] = 1;
      }
    }
  }

  const set = new Set();
  const visited = new Array(n).fill(0);

  const f = (i, a) => {
    if (a.length === n) {
      set.add(a.join(''));
      return;
    }

    const tos = g[i];
    let toCache = -1;

    for (let j = 0; j < n; j += 1) {
      if (tos[j] && toCache !== nums[j] && !visited[j]) {
        toCache = nums[j];
        visited[j] = 1;
        a.push(nums[j]);
        f(j, a);
        a.pop();
        visited[j] = 0;
      }
    }
  };

  for (let i = 0; i < n; i += 1) {
    visited[i] = 1;
    f(i, [nums[i]]);
    visited[i] = 0;
  }

  return set.size;
};