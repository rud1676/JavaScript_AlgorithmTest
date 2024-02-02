const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = input[0].indexOf(input[1]);

let cntA=0;

let cntB=0;



let res;
for(let i=0;i<input[0].length;i++){
if (input[0].slice(i,i+2)===(input[1])) {
   cntA++;
}
if (input.slice(i,i+2)===("eb")) {
    cntB++;
} 
}
// 문자열 'ee'가 존재하는지 확인하고, 존재하면 Yes, 아니면 No를 출력합니다.



// 문자열 'ab'가 존재하는지 확인하고, 존재하면 Yes, 아니면 No를 출력합니다.


console.log(`${cntA}`);