const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
.split("\n")
.map((el) => parseInt(el));

let sum = 0;
let str = "";
let max = Number.MIN_SAFE_INTEGER;
function hasOdd(input) {
  for (let i = 0; i < input.length; i++) {
    if(max<input[i]){
        max = input[i];
    }
   

}
console.log(max);
console.log(input.indexOf(max)+1)
}
hasOdd(input);
