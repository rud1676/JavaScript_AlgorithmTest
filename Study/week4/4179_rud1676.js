const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const diff = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const [n, m] = input.shift().split(" ").map(Number);
const mp = [];
for (let i = 0; i < n; i++) {
  mp.push(input.shift().split(""));
}

function solution() {
  let jstart = [];
  let fstart = [];

  let jvst = Array.from(Array(n), () => Array(m).fill(0));
  let fvst = Array.from(Array(n), () => Array(m).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mp[i][j] === "J") {
        jstart = [i, j];
        jvst[i][j] = 1;
      } else if (mp[i][j] === "F") {
        fstart.push([i, j]);
        fvst[i][j] = 1;
      }
    }
  }

  // fire bfs
  //불이 이동시간 맵 지점마다 구하기
  let fque = fstart;
  while (fque.length !== 0) {
    const [cy, cx] = fque.shift();
    for (let i = 0; i < 4; i++) {
      const ny = cy + diff[i][0];
      const nx = cx + diff[i][1];
      if (
        ny < 0 ||
        nx < 0 ||
        ny >= n ||
        nx >= m ||
        fvst[ny][nx] ||
        mp[ny][nx] === "#"
      )
        continue;
      fvst[ny][nx] = fvst[cy][cx] + 1;
      fque.push([ny, nx]);
    }
  }
  let jque = [jstart];
  while (jque.length !== 0) {
    const [cy, cx] = jque.shift();

    for (let i = 0; i < 4; i++) {
      const ny = cy + diff[i][0];
      const nx = cx + diff[i][1];
      if (
        ny < 0 ||
        nx < 0 ||
        ny >= n ||
        nx >= m ||
        jvst[ny][nx] ||
        mp[ny][nx] === "#" ||
        mp[ny][nx] === "F" ||
        (fvst[ny][nx] !== 0 && fvst[ny][nx] <= jvst[cy][cx] + 1)
      )
        continue;

      jvst[ny][nx] = jvst[cy][cx] + 1;
      jque.push([ny, nx]);
    }
  }

  let mn = Infinity;
  for (let i = 0; i < n; i++)
    mn = jvst[i][0] !== 0 ? Math.min(mn, jvst[i][0]) : mn;
  for (let i = 0; i < n; i++)
    mn = jvst[i][m - 1] !== 0 ? Math.min(mn, jvst[i][m - 1]) : mn;

  for (let i = 0; i < m; i++)
    mn = jvst[0][i] !== 0 ? Math.min(mn, jvst[0][i]) : mn;

  for (let i = 0; i < m; i++)
    mn = jvst[n - 1][i] !== 0 ? Math.min(mn, jvst[n - 1][i]) : mn;

  if (mn === Infinity) console.log("IMPOSSIBLE");
  else console.log(mn);
}
solution();

// 맵을 먼저 구해
// F로 BFS
// J로 BFS => 끝 도달 return;
