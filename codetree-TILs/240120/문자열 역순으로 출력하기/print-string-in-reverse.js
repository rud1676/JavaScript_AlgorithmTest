const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")

var arr = input.reverse().join("\n");

console.log(arr);