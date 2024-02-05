// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("");

// 문자열의 길이를 구합니다.
//let length = input.length;

var char = input[0];
var change = input[1];

for(let i=0;i<input.length;i++){
    if(input[i]===change){
        input[i]=char;
    }
}

console.log(input.join(""));