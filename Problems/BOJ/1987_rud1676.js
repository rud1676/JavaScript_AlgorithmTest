const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let diff = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

// 맵입력
// 20*20 = 400
// vst Set과 비교 하며 dfs

// 비트마스킹으로 풀어라. 30개이하는...
const [c, r] = input.shift().split(" ").map(Number);
let result = 0;

function solution() {
  dfs(1 << (input[0][0].charCodeAt() - 65), 0, 0, 1);
  console.log(result);
}

function dfs(vst, y, x, cnt) {
  result = Math.max(result, cnt);
  for (let i = 0; i < 4; i++) {
    const nx = x + diff[i][0];
    const ny = y + diff[i][1];
    if (
      nx < 0 ||
      nx >= r ||
      ny < 0 ||
      ny >= c ||
      vst & (1 << (input[ny][nx].charCodeAt() - 65))
    )
      continue;
    dfs(vst | (1 << (input[ny][nx].charCodeAt() - 65)), ny, nx, cnt + 1);
  }
}
solution();
