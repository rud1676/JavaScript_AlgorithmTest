const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

input[0] = Number(input[0])+8;
input[1] = Number(input[1])*3;


console.log(`${input[0]}\n${input[1]}\n${input[0]*input[1]}`);