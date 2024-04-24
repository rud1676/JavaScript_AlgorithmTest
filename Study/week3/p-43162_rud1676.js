function dfs(n, visit, mp) {
  if (!mp[n]) return;
  for (let node of mp[n]) {
    if (visit[node]) continue;
    visit[node] = 1;
    dfs(node, visit, mp);
  }
  return;
}
function solution(n, computers) {
  var answer = 0;
  let mp = {};
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j !== i && computers[i][j]) {
        if (mp[i]) mp[i].push(j);
        else mp[i] = [j];
      }
    }
  }
  let vst = Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (!vst[i]) {
      dfs(i, vst, mp);
      answer++;
    }
  }
  return answer;
}
