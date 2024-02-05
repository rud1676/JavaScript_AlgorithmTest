// 입력 및 변수 선언
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arrA = input[0].split(" ");
let arrB = input[1].split(" ");

let mathA = Number(arrA[0]), engA = Number(arrA[1]);
let mathB = Number(arrB[0]), engB = Number(arrB[1]);

// 출력
if (mathA > mathB && engA > engB) {
    console.log(1);
}
else {
    console.log(0);
}