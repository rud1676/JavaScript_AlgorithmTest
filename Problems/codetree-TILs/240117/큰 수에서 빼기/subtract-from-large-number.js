const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

if(a>b){

console.log(`${a-b}`);
}else{

console.log(`${b-a}`);
}