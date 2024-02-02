const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(" ");

const INT_MIN = Number.MIN_SAFE_INTEGER;

var max = Math.max(...input)

console.log(max);