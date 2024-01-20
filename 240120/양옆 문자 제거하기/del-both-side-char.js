// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

// 문자열의 길이를 구합니다.
//let length = input.length;

input = input.slice(0,1)+input.slice(2,input.length-2)+input.slice(input.length-1)

console.log(input);