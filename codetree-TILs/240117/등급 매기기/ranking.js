// 변수 선언 및 입력
const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());

// 출력
if (input >=90) {
    console.log("A");
}
else if (input>= 80) {
    console.log("B");
}
else if (input>= 70) {
    console.log("C");
}
else if(input>=60){
    console.log("D");
}else{
    console.log("F")
}