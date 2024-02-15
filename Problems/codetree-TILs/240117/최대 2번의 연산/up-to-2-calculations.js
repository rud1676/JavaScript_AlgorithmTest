// 변수 선언 및 입력
const fs = require("fs");
let a = Number(fs.readFileSync(0).toString().trim());

// 출력
if (a %2==0) {

    a/=2;
   
}
if(a%2 !=0) {
    a+=1;
    a/=2;
   
}
console.log(parseInt(a));