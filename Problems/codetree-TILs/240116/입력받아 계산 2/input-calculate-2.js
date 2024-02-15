const fs = require("fs");

let input = fs.readFileSync(0).toString();

let arr=input.split(" ");

arr[0] = Number(arr[0]);
arr[1] = Number(arr[1]);

console.log(arr[0]*arr[1]);