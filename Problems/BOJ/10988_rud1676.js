const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const carr = input.shift().split("");
const revers = JSON.parse(JSON.stringify(carr)).reverse();
let answer = 1;
for (let i = 0; i < carr.length; i++) {
  if (carr[i] !== revers[i]) answer = 0;
}
console.log(answer);
