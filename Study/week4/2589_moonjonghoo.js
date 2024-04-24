function solution(arr) {
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  let row = arr.length;
  let col = arr[0].length;

  function bfs(y, x) {
    const queue = [];
    let visited = Array.from(Array(row), () => Array(col).fill(0));
    let maxDist = 0;

    queue.push([y, x]);
    visited[y][x] = 1;

    while (queue.length) {
      const cur = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = cur[1] + dx[i];
        const ny = cur[0] + dy[i];

        if (0 <= ny && ny < row && 0 <= nx && nx < col) {
          if (!visited[ny][nx] && arr[ny][nx] === "L") {
            visited[ny][nx] = visited[cur[0]][cur[1]] + 1;
            maxDist = Math.max(maxDist, visited[ny][nx]);
            queue.push([ny, nx]);
          }
        }
      }
    }
    return maxDist - 1;
  }

  let ans = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (arr[i][j] === "L") {
        ans = Math.max(ans, bfs(i, j));
      }
    }
  }
  return ans;
}

console.log(
  solution([
    ["W", "L", "L", "W", "W", "W", "L"],
    ["L", "L", "L", "W", "L", "L", "L"],
    ["L", "W", "L", "W", "L", "W", "W"],
    ["L", "W", "L", "W", "L", "L", "L"],
    ["W", "L", "L", "W", "L", "W", "W"],
  ])
);
