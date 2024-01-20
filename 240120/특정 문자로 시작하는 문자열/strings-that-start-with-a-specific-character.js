const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let char = input[input.length-1];

let n = Number(input[0]);

var cnt = 0;
var sum =0;
for(let i=1;i<=n;i++){
    if(input[i][0]===char){
        cnt++;
        sum+= input[i].length;
    }
}

console.log(cnt,(sum/cnt).toFixed(2));