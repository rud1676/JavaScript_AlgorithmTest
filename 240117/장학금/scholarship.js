// 입력 및 변수 선언
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a= Number(input[0]);
let b = Number(input[1]);

let price=0;
// 출력
if (a>=90) {

    if(b>=95){

   price=100000;
    }else if(b>=90){
price = 50000;
    }
}


console.log(price);