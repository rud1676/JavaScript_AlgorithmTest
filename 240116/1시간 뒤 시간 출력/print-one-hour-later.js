const fs = require("fs");

let input = fs.readFileSync(0).toString().split(":");

input[0] = Number(input[0]);
input[1] = Number(input[1]);

console.log(`${input[0]+1}:${input[1]}`);