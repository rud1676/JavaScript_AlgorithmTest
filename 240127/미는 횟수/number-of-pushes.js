const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let str = input[0];

let str2= input[1];

let res = 0;
let str3="";

for(let i=1 ; i<=str.length;i++){
    str= str.slice(1)+str.slice(0,1);
    if(str===str2){
        res = i;
        break;
    }
}
console.log(res===0?-1:res);