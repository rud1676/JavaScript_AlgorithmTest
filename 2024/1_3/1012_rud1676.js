const INPUT = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let dy = [0, 0, -1, 1];
let dx = [1, -1, 0, 0];

const n = Number(INPUT.shift());
let a, b, c;

for (let i = 0; i < n; i++) {
  [a, b, c] = INPUT.shift()
    .split(" ")
    .map((v) => Number(v));

  solution();
}

function solution() {
  const mp = Array.from(Array(b), () => Array(a).fill(0));
  //make map
  for (let i = 0; i < c; i++) {
    const [x, y] = INPUT.shift()
      .split(" ")
      .map((v) => Number(v));
    mp[y][x] = 1;
  }

  let cnt = 0;
  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      if (mp[i][j] === 1) {
        //dfs실행횟수가 카운트
        bfs(i, j, mp);
        cnt++;
      }
    }
  }
  console.log(cnt);
}

//dfs알고리즘
function dfs(y, x, mp) {
  if (mp[y][x] === 0) return;
  mp[y][x] = 0;

  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];
    if (ny >= b || ny < 0 || nx >= a || nx < 0 || mp[ny][nx] === 0) continue;
    bfs(ny, nx, mp);
  }
}
