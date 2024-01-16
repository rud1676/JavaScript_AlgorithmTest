const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

input[0] = Number(input[0]);
input[1] = Number(input[1]);

let result = input[0]+input[1];

console.log(result.toFixed(2));