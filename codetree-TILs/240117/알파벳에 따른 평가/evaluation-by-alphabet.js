// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

// 출력
if (input ==="S") {
    console.log("Superior");
}
else if (input==="A") {
    console.log("Excellent");
}
else if (input==="B") {
    console.log("Good");
}
else if(input==="C"){
    console.log("Usually");
}else if(input==="D"){
    console.log("Effort")
}else{
    console.log("Failure");
}