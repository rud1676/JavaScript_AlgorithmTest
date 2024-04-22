function solution(a, b, g, s, w, t) {
  var answer = -1;
  let left = 1;
  let right = 0;
  for (let i = 0; i < g.length; i++) {
    let curt = 0;
    curt += Math.floor((g[i] + s[i]) / w[i]) * t[i] * 2;
    if ((g[i] + s[i]) % w[i]) curt += t[i];
    right = Math.max(right, curt);
  }

  function check(ctime) {
    let total = 0;
    let totalG = 0;
    let totalS = 0;
    for (let i = 0; i < g.length; i++) {
      let moveweight = Math.floor(ctime / (t[i] * 2)) * w[i];
      if (ctime % (t[i] * 2) > t[i]) {
        moveweight += w[i];
      }
      total += Math.min(g[i] + s[i], moveweight);
      totalG += Math.min(g[i], moveweight);
      totalS += Math.min(s[i], moveweight);
    }
    return a + b <= total && a <= totalG && b <= totalS;
  }
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (check(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
}
