const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));
const [N] = input.shift();
const line = input.sort((a, b) => a[0] - b[0]);
let answer = 0;
let start = line[0][0];
let end = line[0][1];

for (let i = 1; i < N; i++) {
  if (end < line[i][0]) {
    answer += end - start;
    start = line[i][0];
    end = line[i][1];
  } else if (line[i][0] <= end && line[i][1] >= end) {
    end = line[i][1];
  }
}

answer += end - start;
console.log(answer);
