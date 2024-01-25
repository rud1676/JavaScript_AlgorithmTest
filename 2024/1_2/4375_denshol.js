const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n")
  .map(Number);

for (let i = 0; i < input.length; i++) {
  let num = 1;
  let count = 1;

  // num이 입력 값으로 나누어 떨어질 때까지 반복
  while (num % input[i] !== 0) {
    num = (num * 10 + 1) % input[i];
    count++;
  }

  console.log(count);
}
