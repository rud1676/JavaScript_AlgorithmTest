// 입력 및 변수 선언
const fs = require("fs");
let a = Number(fs.readFileSync(0).toString().trim());

// 출력
if (a < 10 || a > 20) {
    console.log("yes");
}
else {
    console.log("no");
}