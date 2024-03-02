const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [a, b, c] = input.shift().split(" ").map(Number);
const [as, ad] = input.shift().split(" ").map(Number);
const [bs, bd] = input.shift().split(" ").map(Number);
const [cs, cd] = input.shift().split(" ").map(Number);

let sum = 0;

for (let i = 1; i <= 100; i++) {
  let cnt = 0;
  if (i > as && i <= ad) cnt++;
  if (i > bs && i <= bd) cnt++;
  if (i > cs && i <= cd) cnt++;
  if (cnt === 1) sum += a;
  if (cnt === 2) sum += b * 2;
  if (cnt === 3) sum += c * 3;
}

console.log(sum);
