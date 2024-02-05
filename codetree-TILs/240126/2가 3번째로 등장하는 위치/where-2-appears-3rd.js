const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let n = input[0];

let arr = input[1].split(" ").map(Number);

var cnt =0;


    console.log(arr.indexOf(2,arr.indexOf(2,arr.indexOf(2)+1)+1)+1);