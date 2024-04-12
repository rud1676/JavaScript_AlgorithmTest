const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const n = Number(input.shift()); // 100만번

  const lines = input.map((v) => v.split(" ").map(Number));

  lines.sort((a, b) => a[0] - b[0]); //100만, 100만*

  let length = 0;
  let cur = -Infinity;

  for (let [x, y] of lines) {
    cur = cur > x ? cur : x;
    length += Math.max(0, y - cur);
    cur = cur > y ? cur : y;
  }
  console.log(length);
}

solution();
