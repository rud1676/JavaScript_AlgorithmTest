// 입력 및 변수 선언
let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")



let arr =  input[1].split(" ");

let a = Number(input[0]);
let b = Number(arr[0]);
let c = Number(arr[1]);
let d = Number(arr[2]);
let e = Number(arr[3]);

// 출력 
console.log(a > b ? 1 : 0);
console.log(a > c ? 1 : 0);
console.log(a > d ? 1 : 0);
console.log(a > e ? 1 : 0);