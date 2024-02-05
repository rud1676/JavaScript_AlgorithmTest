// 입력 및 변수 선언
const fs = require("fs");
let a = Number(fs.readFileSync(0).toString().trim());

// 출력
if (a %13==0 || a %19 ==0) {
    console.log("True");
}
else {
    console.log("False");
}