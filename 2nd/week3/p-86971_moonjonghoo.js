function solution(n, wires) {
  let answer = Infinity;

  function dfs(graph, start, visited) {
    visited[start] = true;
    let count = 1;

    for (let i = 0; i < graph[start].length; i++) {
      const neighbor = graph[start][i];
      if (!visited[neighbor]) {
        count += dfs(graph, neighbor, visited);
      }
    }

    return count;
  }

  for (let i = 0; i < n - 1; i++) {
    const graph = Array(n)
      .fill(null)
      .map(() => []);
    for (let j = 0; j < n - 1; j++) {
      if (i === j) continue;
      const [a, b] = wires[j];
      graph[a - 1].push(b - 1);
      graph[b - 1].push(a - 1);
    }

    const visited = Array(n).fill(false);
    let count1 = 0;
    let count2 = 0;

    for (let j = 0; j < n; j++) {
      if (!visited[j]) {
        if (count1 === 0) {
          count1 = dfs(graph, j, visited);
        } else {
          count2 = dfs(graph, j, visited);
        }
      }
    }

    const diff = Math.abs(count1 - count2);
    answer = Math.min(answer, diff);
  }

  return answer;
}
