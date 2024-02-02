const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = +input[0];

let arr = input[1].split(" ").map(Number);

let max = -1;

for(let i=0;i<N;i++){
    let count=0;
    for(let j=0;j<N;j++){
        if(arr[i]===arr[j]){
            count++;
        }
    }

    if(count===1 && arr[i]>max){
        max=arr[i];
    }
}

console.log(max)