const INPUT = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let dy = [0, 0, 1, -1];
let dx = [1, -1, 0, 0];
const [a, b, c] = INPUT.shift()
  .split(" ")
  .map((v) => Number(v));
const solution = () => {
  const mp = Array.from(Array(a), () => Array(b).fill(0));

  for (let i = 0; i < c; i++) {
    const rect = INPUT.shift()
      .split(" ")
      .map((v) => Number(v));
    for (let x = rect[0]; x < rect[2]; x++) {
      for (let y = rect[1]; y < rect[3]; y++) {
        mp[y][x] = -1;
      }
    }
  }
  let cnt = 1;

  for (let y = 0; y < a; y++) {
    for (let x = 0; x < b; x++) {
      if (mp[y][x] === 0) {
        dfs(y, x, mp, cnt);
        cnt++;
      }
    }
  }

  const result = Array(cnt).fill(0);
  for (let y = 0; y < a; y++) {
    for (let x = 0; x < b; x++) {
      if (mp[y][x] !== -1) result[mp[y][x]]++;
    }
  }
  result.shift();
  console.log(cnt - 1);
  console.log(result.sort((a, b) => a - b).join(" "));
};

function dfs(y, x, mp, cnt) {
  if (mp[y][x] !== 0) return;
  mp[y][x] = cnt;
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= b || nx < 0 || ny >= a || ny < 0 || mp[ny][nx] !== 0) continue;
    dfs(ny, nx, mp, cnt);
  }
}

solution();
