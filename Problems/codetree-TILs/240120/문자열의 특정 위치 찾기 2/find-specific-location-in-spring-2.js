const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();

let one = "apple";
let two = "banana";
let thr = "grape";
let four = "blueberry";
let five = "orange";

let arr= ["apple", "banana", "grape", "blueberry", "orange"];
var cnt =0;
for(let i=0;i<arr.length;i++){
     if(arr[i][2]===input){
            console.log(arr[i]);
            cnt++;
        }else if(arr[i][3]===input){
            console.log(arr[i])
            cnt++;
        }
   
}
console.log(cnt);