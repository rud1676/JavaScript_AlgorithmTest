const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 문제를 잘못 읽음 ㅅㅂ

const [n] = input.shift().split().map(Number);
const [left, right] = input.shift().split("*");

for (let i = 0; i < n; i++) {
  let check = input[i];
  const a = check.substring(0, left.length);
  check = check.substring(a.length);
  const b = check.substring(check.length - right.length, check.length);
  if (a === left && b === right) {
    console.log("DA");
  } else {
    console.log("NE");
  }
}
