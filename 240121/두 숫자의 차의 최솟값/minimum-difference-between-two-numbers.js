const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);

let arr = input[1].split(" ");

let min = 1000;

for(let i=0;i<n;i++){

    for(let j=0;j<i;j++){

 if(min>arr[i]-arr[j]){
        min=arr[i]-arr[j];
    }
    }

}
   console.log(min);