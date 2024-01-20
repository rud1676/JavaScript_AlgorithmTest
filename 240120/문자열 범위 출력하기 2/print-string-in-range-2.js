const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

var n = Number(input[1]);

var sum="";

var str = input[0].split("").reverse().join("");

for(let i=0;i<n;i++){
sum+=str[i];
}

console.log(sum.trim());