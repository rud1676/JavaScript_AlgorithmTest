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
function dfs(n, wires, visit) {
  if (wires[n] === undefined) return 1;
  let ret = 1;
  for (let node of wires[n]) {
    if (visit[node]) continue;
    visit[node] = 1;
    ret += dfs(node, wires, visit);
  }
  return ret;
}
function go(n, wires, s1, s2) {
  let gr = makegr(wires);

  let visit = Array(n + 1).fill(0);

  visit[s1] = 1;
  let left = dfs(s1, gr, visit);
  visit[s2] = 1;
  let right = dfs(s2, gr, visit);

  return Math.abs(left - right);
}
function solution(n, wires) {
  let answer = 99999999;
  for (let i = 0; i < wires.length; i++) {
    let temp = wires.shift();
    answer = Math.min(go(n, wires, temp[0], temp[1]), answer);
    wires.push(temp);
  }
  return answer;
}
