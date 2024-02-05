const fs = require("fs");

let input = fs.readFileSync(0).toString().split("-");

input[0] = Number(input[0]);
input[1] = Number(input[1]);
input[2] = Number(input[2]);

[input[1],input[2]] = [input[2],input[1]];


console.log(`0${input[0]}-${input[1]}-${input[2]}`);