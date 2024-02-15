const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("-");

[input[0],input[1],input[2]] = [input[2],input[0],input[1]];

console.log(`${input[0]}.${input[1]}.${input[2]}`);