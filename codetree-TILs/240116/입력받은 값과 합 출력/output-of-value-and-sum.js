const fs = require("fs");

let arr = fs.readFileSync(0).toString().split(" ");



arr[0] = parseInt(arr[0]);
arr[1] = parseInt(arr[1]);

let num = arr[0]+arr[1]

console.log(arr[0]+" "+arr[1]+" "+num)