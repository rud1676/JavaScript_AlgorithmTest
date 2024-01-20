const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n  = input[0];

let arr=input.join("");
var cnt = 0;

for(let i=0;i<arr.length;i++){
   if(arr[i]==='a')cnt++;
}



console.log(arr.length-1+" "+cnt);