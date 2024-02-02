const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

input[0] = Number(input[0]);
input[1] = Number(input[1]);
input[2] = Number(input[2]);



console.log(input[0].toFixed(3));
console.log(input[1].toFixed(3));
console.log(input[2].toFixed(3));