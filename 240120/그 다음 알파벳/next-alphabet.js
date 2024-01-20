// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();


console.log(`${String.fromCharCode(Number(input[0].charCodeAt())+1)} `);

//input[0] = input[0].split(" ");