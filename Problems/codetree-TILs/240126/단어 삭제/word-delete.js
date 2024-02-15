const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let str = input[0];

let ch = input[1];

let i=0;
while(str.includes(ch)){

 str= str.replace(ch,'');

i++;
}
console.log(str);