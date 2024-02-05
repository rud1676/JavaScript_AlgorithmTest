// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");


console.log(`${String.fromCharCode(input[0])} ${String.fromCharCode(input[1])} ${String.fromCharCode(input[2])} ${String.fromCharCode(input[3])} ${String.fromCharCode(input[4])}`);

//input[0] = input[0].split(" ");