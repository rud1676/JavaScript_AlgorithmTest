function solution(n, costs) {
  const p = Array(n).fill(0);
  let result = 0;
  for (let i = 0; i < n; i += 1) p[i] = i;
  costs.sort((a, b) => a[2] - b[2]);
  const findP = (v) => {
    if (p[v] !== v) return findP(p[v]);
    return v;
  };
  const unionP = (a, b) => {
    a = findP(a);
    b = findP(b);
    if (a < b) p[b] = a;
    else p[a] = b;
  };
  for (const cost of costs) {
    const [a, b, c] = cost;
    if (findP(a) !== findP(b)) {
      unionP(a, b);
      result += c;
    }
  }
  return result;
}
