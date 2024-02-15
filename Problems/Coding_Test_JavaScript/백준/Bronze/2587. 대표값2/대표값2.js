const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => parseInt(el));

let sum = 0;
function hasOdd(input) {
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }
  console.log(Math.floor(sum / 5));
  input =input.sort((a, b) => a - b);
  console.log(input[2]);
}
hasOdd(input);
