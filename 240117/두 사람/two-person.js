// 입력 및 변수 선언
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let personA = input[0].split(" ");
let personB = input[1].split(" ");

let ageA = Number(personA[0]), genderA = personA[1];
let ageB = Number(personB[0]), genderB = personB[1];

// 출력
if (ageA>= 19 && genderA==="M"|| ageB>=19 && genderB==="M" ) {
    console.log(1);
} 
else {
    console.log(0);
}