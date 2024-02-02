const fs = require("fs");

let input =fs.readFileSync(0).toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);



let res="";
for(let i =a; i<=b ; i+=2){
    res += `${i} ` 
}

console.log(res);