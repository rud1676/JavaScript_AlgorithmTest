const fs = require("fs");

let input = Number(fs.readFileSync(0).toString());

let res="";

for(let i = input ;i<=100 ;i++){
    res += `${i} `;
}

console.log(res);