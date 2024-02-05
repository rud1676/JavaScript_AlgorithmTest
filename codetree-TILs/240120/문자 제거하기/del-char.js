// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

// 문자열의 길이를 구합니다.
//let length = input.length;

var str = input[0];

let i=1;
while(str.length!==1)
{
     var n = Number(input[i]);
 if(str.length<=n){
    str=str.slice(0,str.length-1);

 }
str =  str.slice(0,n)+str.slice(n+1,str.length);
  
console.log(str);
i++;
}