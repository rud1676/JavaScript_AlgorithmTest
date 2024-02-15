const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let a  = input[0];
let b = input[1];
let num = 0;
let sum =0;
let arr=new Array(b).fill(0);


while(a>1){
num=a%b;
arr[num]++;
a=Math.floor(a/b);




}
for(let i=0;i<arr.length;i++){
    sum+=arr[i]**2;
}

console.log(sum);