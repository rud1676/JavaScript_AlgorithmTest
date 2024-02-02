const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");


let sum = "";


for(let i= arr.length-1 ; i>=0;i-- ){
    sum += arr[i];
}


    console.log(sum);