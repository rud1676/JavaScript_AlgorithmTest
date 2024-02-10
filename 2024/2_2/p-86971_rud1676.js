function makegr(wires) {
  const result = {};
  wires.map((v) => {
    if (!result[v[0]]) result[v[0]] = [];
    result[v[0]].push(v[1]);
    if (!result[v[1]]) result[v[1]] = [];
    result[v[1]].push(v[0]);
  });
  return result;
}

function dfs(gr, x, vst) {
  if (!gr[x]) return 0;
  let ret = 1;
  for (const nx of gr[x]) {
    if (vst[nx]) continue;
    vst[nx] = 1;
    ret += dfs(gr, nx, vst);
  }
  return ret;
}
function solution(n, wires) {
  if (n === 2) return 0;
  if (n === 3) return 1;
  var answer = 9999;
  // 1개씩 비워준다
  // 비운 두점을 기억한다
  // 그래프를 만든다
  // 비운 두점에서 dfs해서 정점갯수 몇개잇는지 샌다
  // 차이를 구한다
  // 반복해서 min값 구한다
  let x, y;
  for (let i = 0; i < wires.length; i++) {
    [x, y] = wires.shift();
    const gr = makegr(wires);

    let vst = Array(n).fill(0);
    vst[x] = 1;
    let xSize;
    if (!gr[x]) xSize = 1;
    else xSize = dfs(gr, x, vst);

    vst = Array(n).fill(0);
    vst[y] = 1;
    let ySize;
    if (!gr[y]) ySize = 1;
    else ySize = dfs(gr, y, vst);

    const diff = Math.abs(xSize - ySize);
    answer = Math.min(diff, answer);
    wires.push([x, y]);
  }

  return answer;
}
