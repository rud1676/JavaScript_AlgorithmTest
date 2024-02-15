// 입력 및 변수 선언
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let mathA = Number(input)

// 출력
if (mathA >= 10 && mathA <= 20) {
    console.log("yes");
}
else {
    console.log("no");
}