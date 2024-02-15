const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let res = "";
// 문자열 'ee'가 존재하는지 확인하고, 존재하면 Yes, 아니면 No를 출력합니다.
if (input.includes("ee")) {
    res += "Yes ";
}
else {
    res += "No ";
}

// 문자열 'ab'가 존재하는지 확인하고, 존재하면 Yes, 아니면 No를 출력합니다.
if (input.includes("ab")) {
    res += "Yes";
} else {
    res += "No";
}

console.log(res);