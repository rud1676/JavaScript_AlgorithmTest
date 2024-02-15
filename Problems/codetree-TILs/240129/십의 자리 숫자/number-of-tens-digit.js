const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let i=0;

const arr = new Array(10).fill(0);

while(input[i]!==0){

    if(input[i]!==0 && Math.floor(input[i]/10)===0){

    }else{
arr[Math.floor(input[i]/10)]++;
    }
    

    i++;
}

for(let i=1;i<10;i++){
console.log(`${i} - ${arr[i]}`);
}