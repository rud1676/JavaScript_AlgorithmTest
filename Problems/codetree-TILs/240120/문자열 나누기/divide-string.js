const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

var n = Number(input[0]);

var cnt=0;
var arr = input[1].split(" ");
let str="";

for(let i=0; i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
          str += arr[i][j];  
          if(str.length===5){

            console.log(str);
        str="";
        cnt++;
    }
    }
    
    
}

console.log(str);