const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

input[0] = Number(input[0]);

console.log(input[0],input[1]);