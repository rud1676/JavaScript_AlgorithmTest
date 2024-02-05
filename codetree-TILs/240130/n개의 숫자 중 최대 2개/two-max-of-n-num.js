const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = +input[0];

let arr = input[1].split(" ").map(Number).sort((a,b)=>b-a);

console.log(arr[0]+" "+arr[1]);