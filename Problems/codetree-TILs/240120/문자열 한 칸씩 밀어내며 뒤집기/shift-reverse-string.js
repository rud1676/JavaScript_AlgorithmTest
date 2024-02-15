// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");


input[0] = input[0].split(" ");

var s = input[0][0];
var n = Number(input[0][1]);

// 문자열의 길이를 구합니다.
//let length = input.length;

var str = s;

let i=1;
while(i<=n){
var N  =  Number(input[i]);
    if(N===1){
str =  str.slice(1)+str.slice(0,1);

    }else if(N===2){
        str =  str.slice(-1)+str.slice(0,-1);

    }else{
        str =  str.split("").reverse().join("");

    }
    
i++;
  console.log(str);
}