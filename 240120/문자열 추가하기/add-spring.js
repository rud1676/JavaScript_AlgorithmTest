const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();

input = input.concat("Hello");

console.log(input);