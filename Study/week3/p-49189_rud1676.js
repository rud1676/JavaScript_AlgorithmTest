function solution(n, edge) {
  var answer = 0;
  // bfs로 구현

  const mp = {};
  edge.map((v) => {
    if (mp[v[0]]) mp[v[0]].push(v[1]);
    else mp[v[0]] = [v[1]];

    if (mp[v[1]]) mp[v[1]].push(v[0]);
    else mp[v[1]] = [v[0]];
  });
  const que = [];

  que.push(1);
  const visit = Array(n + 1).fill(0);

  let dist = 1;
  visit[1] = -1;
  //console.log(mp);
  while (que.length != 0) {
    let size = que.length;
    while (size--) {
      let cur = que.shift();
      for (let node of mp[cur]) {
        if (visit[node]) continue;
        visit[node] = dist;
        que.push(node);
      }
    }
    dist++;
  }
  for (let i of visit) {
    if (dist - 2 == i) answer++;
  }
  return answer;
}
