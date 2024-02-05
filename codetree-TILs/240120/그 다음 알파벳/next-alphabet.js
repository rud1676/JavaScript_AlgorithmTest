// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();


var str = String.fromCharCode(Number(input[0].charCodeAt())+1);
if(input=='z'){
str='a';
}

console.log(str);

//input[0] = input[0].split(" ");