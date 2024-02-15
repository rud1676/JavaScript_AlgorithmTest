const fs = require("fs");

let input = Number(fs.readFileSync(0).toString());


let res="";
for(let i =17; i>=5 ; i--){
    res += `${i} ` 
}

console.log(res);