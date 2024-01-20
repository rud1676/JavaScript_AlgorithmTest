const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

var n  = Number(input[0]);

var str="";

for(let i=1;i<=n;i++){
str+=input[i];
}
console.log(str);