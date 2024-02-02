const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("");

var str = "";

for(let i=1;i<=input.length;i+=2){
    str+=input[i];
}

console.log(str.trim().split("").reverse().join("").trim());