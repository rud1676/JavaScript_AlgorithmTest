const CHAR_START = 'A'.charCodeAt();
const CHAR_END = 'Z'.charCodeAt();

const f = (c) => {
  const nc = c.charCodeAt();

  return Math.min(nc - CHAR_START, CHAR_END - nc + 1);
};

function solution(name) {
  const sn = name.split('');
  const indexes = [];

  for (let i = 0; i < sn.length; i += 1) {
    if (sn[i] !== 'A') indexes.push(i);
  }

  let min = sn.length - 1;

  const dfs = (x, s, e, a, isInverse, c1, c2) => {
    if (a >= min) return;

    if ((e - s) < 0) {
      min = a;
      return;
    }

    if (isInverse) {
      dfs(indexes[e], s, e - 1, a + x - indexes[e], 1, c1, c2);

      if (!c2) {
        dfs(indexes[s], s + 1, e, a + sn.length - x + indexes[s], 0, c1, 1);
      }
    } else {
      dfs(indexes[s], s + 1, e, a + indexes[s] - x, 0, c1, c2);

      if (!c1) {
        dfs(indexes[e], s, e - 1, a + sn.length - indexes[e] + x, 1, 1, c2);
      }
    }
  };

  dfs(0, 0, indexes.length - 1, 0, 0, 0, 0);

  return min + sn.map(f).reduce((acc, cur) => acc + cur, 0);
}