// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

// 문자열의 길이를 구합니다.
//let length = input.length;

var str = input;

let i=1;
while(i<=str.length){
console.log(str);
    str =  str.slice(-1)+str.slice(0,-1);

i++;

}

  console.log(str);