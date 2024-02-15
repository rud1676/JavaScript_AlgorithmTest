const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n  = input[0];


var cnt = 0;

for(let i=0;i<input.length;i++){
   if(input[i][0]==='a')cnt++;
}

let arr=input.join("");

if(n>=10)
console.log(arr.length-2+" "+cnt);
else
console.log(arr.length-1+" "+cnt);