const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

const n  = Number(input[0]);

var arr = [];
let sum=0;

 for(let i=1;i<=n;i++){

arr[i] =input[i].split(" ").map(Number);
 for(let j=arr[i][0];j<=arr[i][1];j++){
    if(j%2===0){
        sum+=j;
    }
 }
 console.log(sum);
 sum=0;
 }