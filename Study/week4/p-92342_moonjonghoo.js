function solution(n, info) {
  var answer = [];
  let lion = [];
  for (let i = 0; i < info.length; i++) {
    lion.push(info[i] + 1);
  }
  let visited = Array.from({ length: info.length }, () => false);
  let max = 0;
  function DFS(v, rest) {
    if (v === 10) return;
    if (rest === 0) {
      let lionresult = 0;
      let appeachresult = 0;
      for (let i = visited.length; i >= 0; i--) {
        let x = 10 - i;
        if (visited[i]) {
          lionresult += x;
        } else if (!visited[i] && info[i] !== 0) {
          appeachresult += x;
        }
      }
      if (lionresult - appeachresult >= max) {
        answer = visited.slice();
      }
      max = Math.max(lionresult - appeachresult, max);
      // max = Math.max(lionresult - appeachresult, max);
    } else {
      visited[v] = true;
      DFS(v + 1, rest - lion[v]);
      visited[v] = false;
      DFS(v + 1, rest);
    }
  }
  DFS(0, n);

  let result = [];
  if (max === 0) return [-1];
  else {
    for (let i = 0; i < answer.length; i++) {
      if (answer[i]) {
        result.push(lion[i]);
      } else {
        result.push(0);
      }
    }
    return result;
  }
}

console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]));
