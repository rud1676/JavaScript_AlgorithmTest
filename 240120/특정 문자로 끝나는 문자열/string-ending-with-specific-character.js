const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let char = input[10];


for(let i=0; i<input.length-1;i++){
if(char === input[i][input[i].length-1]){
console.log(input[i]);
}
}