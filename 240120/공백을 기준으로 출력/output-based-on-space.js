const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

var arr = input[0].split(" ");
var brr = input[1].split(" ");

var crr = arr.concat(brr);

var drr  = crr.join("");





console.log(drr);