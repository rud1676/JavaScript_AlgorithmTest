const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n] = input.map(Number);

let cnt = 0;

for (let i = 0; i < 6; i++) {
  if (n & (1 << i)) {
    cnt++;
  }
}
if (n === 64) console.log(1);
else console.log(cnt);

// 64
// 32
// 32
// X = 23
// 16 16
// 16 8
// 16 4 4
// 16 4 2 1
