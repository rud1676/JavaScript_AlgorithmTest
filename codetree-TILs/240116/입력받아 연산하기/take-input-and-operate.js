const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

input[0] = Number(input[0])+87;
input[1] = Number(input[1])%10;

console.log(`${input[0]}\n${input[1]}`);