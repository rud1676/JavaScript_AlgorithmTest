const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let max = 0
let min = 100

for(let i =0 ; i< input.length;i++){


if(input[i].length>max){
    max=input[i].length;

}
if(input[i].length<min){
    min=input[i].length;

}
}

console.log(max-min);