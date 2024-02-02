// 입력 및 변수 선언
const fs = require("fs");
let a = Number(fs.readFileSync(0).toString().trim());

// 출력
if (a % 3 === 0 || a % 5 === 0) {
    console.log(1);
}
else {
    console.log(0);
}