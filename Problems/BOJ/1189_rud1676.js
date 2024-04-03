const INPUT = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const diff = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const [r, c, k] = INPUT.shift().split(" ").map(Number);
const mp = Array.from(Array(r), () => Array(c).fill(0));

function dfs(y, x) {
  if (y === 0 && x === c - 1) {
    if (mp[y][x] === k) return 1;
    else return 0;
  }
  let ret = 0;
  for (let i = 0; i < 4; i++) {
    const ny = y + diff[i][0];
    const nx = x + diff[i][1];
    if (
      ny < 0 ||
      ny >= r ||
      nx < 0 ||
      nx >= c ||
      mp[ny][nx] !== 0 ||
      INPUT[ny][nx] === "T"
    )
      continue;
    mp[ny][nx] = mp[y][x] + 1;
    ret += dfs(ny, nx);
    mp[ny][nx] = 0;
  }
  return ret;
}
mp[r - 1][0] = 1;
console.log(dfs(r - 1, 0));
