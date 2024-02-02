// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");


console.log(`${input[0].charCodeAt()} ${String.fromCharCode(input[1])} `);

//input[0] = input[0].split(" ");