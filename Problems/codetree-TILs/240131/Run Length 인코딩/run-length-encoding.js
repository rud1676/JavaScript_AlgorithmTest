const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let result = "";
let count = 1;

for(let i = 0; i < input.length; i++) {
    // 연속된 문자를 확인합니다.
    if(input[i] === input[i+1]) {
        count++;
    } else {
        // 연속된 문자가 끝나면 해당 문자와 개수를 결과에 추가합니다.
        result += input[i] + count;
        count = 1; // 개수를 초기화합니다.
    }
}

console.log(result.length);
console.log(result);