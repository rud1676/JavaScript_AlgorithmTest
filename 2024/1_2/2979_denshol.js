const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let arr = input[0].split(" ");

let A = arr[0];
let B = arr[1];
let C = arr[2];

let cnt = 0;

console.log(cnt);
