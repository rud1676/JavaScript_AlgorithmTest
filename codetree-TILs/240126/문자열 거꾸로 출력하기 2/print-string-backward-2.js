const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let n = +input[0];

for(let i=1;i<=n;i++){
    input[i]=input[i].split("").reverse().join("");
    console.log(input[i]);
}