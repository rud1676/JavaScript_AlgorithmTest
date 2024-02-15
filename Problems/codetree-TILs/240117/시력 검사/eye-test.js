// 입력 및 변수 선언
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");



let a = Number(input[0]);
let b = Number(input[1]);
// 출력
if (a >= 1.0 && b >= 1.0) {
    console.log("High");
}
else if(0.5 <= a && 0.5 <= b){
    console.log("Middle");
}else{
    console.log("Low");
}