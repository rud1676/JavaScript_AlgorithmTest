const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

input[0] = Number(input[0]);
input[1] = Number(input[1]);


console.log(`${input[0]} * ${input[1]} = ${input[0]*input[1]}\n${input[0]} / ${input[1]} = ${parseInt(input[0]/input[1])}`);