const { join } = require("path");

const INPUT = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(INPUT[0]);
const arr = INPUT[1].split(" ").map(Number);

const res = Array(n)
  .fill(0)
  .map((v) => JSON.parse(JSON.stringify([])));

for (let cnt = 0; cnt < n; cnt++) {
  for (let i = 0; i < arr.length; i += 1) {
    res[cnt].push(arr[i]);
    arr.splice(i, 1);
  }
}

for (let i = res.length - 1; i >= 0; i--) {
  console.log(res[i].join(" "));
}
