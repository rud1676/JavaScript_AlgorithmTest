const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);


   var arr =   input[1].split(" ").map(Number);
var min = Math.min(...arr);
var cnt=0;
arr.forEach(item=>{
   if(item===min){
      cnt++;
   }
})

console.log(min+" "+cnt)