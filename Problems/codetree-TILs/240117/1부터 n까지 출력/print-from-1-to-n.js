const fs = require("fs");

let input = Number(fs.readFileSync(0).toString());


let res="";
for(let i =1; i<=input ; i++){
    res += `${i} ` 
}

console.log(res);