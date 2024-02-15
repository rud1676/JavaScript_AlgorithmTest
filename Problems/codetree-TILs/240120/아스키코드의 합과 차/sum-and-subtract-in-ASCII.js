// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");


//input[0] = input[0].split(" ");

// var s = input[0][0];
// var n = Number(input[0][1]);

// 문자열의 길이를 구합니다.
//let length = input.length;
var str = input[0];

let i=0;
while(i<input[1].length){

    if('L'===input[1][i]){
str =  str.slice(1)+str.slice(0,1);

    }else{
        str =  str.slice(-1)+str.slice(0,-1);

    }    
i++;
  
}

console.log(str.charCodeAt()+input[1].charCodeAt(),input[0]>input[1]?str.charCodeAt()-input[1].charCodeAt():input[1].charCodeAt()-str.charCodeAt());