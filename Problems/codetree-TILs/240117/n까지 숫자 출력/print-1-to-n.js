const fs = require("fs");

let input = Number(fs.readFileSync(0).toString());


let i =1;


let res="";
while(i<=input){
    res += `${i} ` 
    i++;
}

console.log(res);