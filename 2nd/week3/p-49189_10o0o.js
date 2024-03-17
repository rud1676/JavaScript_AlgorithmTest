function solution(n, edges) {
  const graph = new Array(n + 1).fill().map(() => new Set());
  const visited = new Array(n + 1).fill(0);

  for (const [a, b] of edges) {
    graph[a].add(b);
    graph[b].add(a);
  }

  let result = [];

  const bfs = (poses) => {
    const nextPoses = [];

    for (const pos of poses) {
      for (const el of graph[pos]) {
        if (!visited[el]) {
          visited[el] = 1;
          nextPoses.push(el);
        }
      }
    }

    if (nextPoses.length) {
      result = nextPoses;
      bfs(nextPoses);
    }
  };

  visited[1] = 1;
  bfs([1]);

  return result.length;
}