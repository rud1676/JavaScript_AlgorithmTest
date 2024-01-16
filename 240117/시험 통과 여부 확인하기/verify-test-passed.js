const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

if(a >= 80){

console.log("pass");
}else{

console.log(`${80-a} more score`);
}