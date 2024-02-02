const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(" ");

var arr = input.reverse().join("\n");
console.log(arr);
for(let i=0;i<input.length;i+=2){

}