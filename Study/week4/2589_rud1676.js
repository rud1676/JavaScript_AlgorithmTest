const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const mp = [];
for (let i = 0; i < n; i++) {
  mp.push(input.shift().split(""));
}
const dif = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function solution() {
  let mx = -1;

  function bfs(y, x, cnt, vst) {
    let que = [[y, x]];
    while (que.length !== 0) {
      const [cy, cx] = que.shift();
      for (let i = 0; i < 4; i++) {
        const ny = cy + dif[i][0];
        const nx = cx + dif[i][1];
        if (
          ny < 0 ||
          nx < 0 ||
          ny >= n ||
          nx >= m ||
          vst[ny][nx] ||
          mp[ny][nx] === "W"
        )
          continue;
        vst[ny][nx] = vst[cy][cx] + 1;
        mx = Math.max(vst[ny][nx], mx);
        que.push([ny, nx]);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mp[i][j] === "L") {
        const v = Array.from(Array(n), () => Array(m).fill(0));
        v[i][j] = 1;
        bfs(i, j, 0, v);
      }
    }
  }
  console.log(mx - 1);
}
solution();
