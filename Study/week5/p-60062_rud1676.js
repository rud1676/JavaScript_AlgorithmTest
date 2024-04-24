function per(length, arr) {
  if (length === 1) return arr.map((v) => [v]);
  const result = [];
  arr.forEach((fix, idx, origin) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const p = per(length - 1, rest);
    const attach = p.map((v) => [...v, fix]);
    result.push(...attach);
  });
  return result;
}
function solution(n, weak, dist) {
  var answer = 0;

  let _weak = Array(weak.length * 2 - 1).fill(0);
  for (let i = 0; i < weak.length * 2 - 1; i++) {
    if (i < weak.length) {
      _weak[i] = weak[i];
    } else {
      _weak[i] = weak[i - weak.length] + n;
    }
  }
  dist.sort((a, b) => b - a);

  for (let i = 1; i <= dist.length; i++) {
    const permuta = per(i, dist);

    for (let permu of permuta) {
      for (let j = 0; j < weak.length; j++) {
        let ckweak = _weak.slice(j, weak.length + j);
        for (let p of permu) {
          const coverage = p + ckweak[0];
          ckweak = ckweak.filter((e) => e > coverage);
          if (!ckweak.length) return i;
        }
      }
    }
  }
  return -1;
}
