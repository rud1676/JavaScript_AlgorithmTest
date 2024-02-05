const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let A = input[0];

let B = input[1];


for(let i=0;i<B.length;i++){

    
    if(A===B){
        
    console.log(i);
    break;
    }
    if(i===B.length-1){
        console.log(-1);
        break;
    }
    A=A.slice(-1)+A.slice(0,A.length-1);
}