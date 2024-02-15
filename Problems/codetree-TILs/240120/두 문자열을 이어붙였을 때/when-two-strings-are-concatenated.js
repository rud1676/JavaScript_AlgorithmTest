const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let arr = input[0].concat(input[1]);

let brr = input[1].concat(input[0]);

if(arr===brr){
    console.log(true);
}else{
    console.log(false);
}