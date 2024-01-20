// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

// 문자열의 길이를 구합니다.
//let length = input.length;

var str = input[0];

let i=0;
while(str.includes(input[1]))
{
var n = str.indexOf(input[1]);
str =  str.slice(0,n)+str.slice(n+(input[1].length),str.length);
  

i++;
}
console.log(str);