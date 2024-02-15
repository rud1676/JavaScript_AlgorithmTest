const fs = require("fs");

let input = fs.readFileSync(0).toString().split(" ");


let a = Number(input[0]);
let b = Number(input[1]);




let res="";
for(let i =b; i>=a ; i--){
    res += `${i} ` 
}

console.log(res);