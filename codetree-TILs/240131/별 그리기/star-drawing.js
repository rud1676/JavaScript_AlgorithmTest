const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim();

let n = +input;
let str="";
for(let i=0;i<n;i++){
    console.log(' '.repeat(n-i-1)+'*'.repeat(2*i+1));
}
for(let i=n-2;i>=0;i--){
    console.log(' '.repeat(n-i-1)+'*'.repeat(2*i+1));
}