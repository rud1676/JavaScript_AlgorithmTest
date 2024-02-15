const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();
// .split("\n")
// .map((el) => parseInt(el));
// console.log(input);
let sum = 0;
let str = "";
function hasOdd(input) {
  for (let i = 0; i < +input; i++) {
    for (let j = +input; j > i; j--) {
      str += "*";
    }
    console.log(str);
    str = "";
  }
}
hasOdd(input);
