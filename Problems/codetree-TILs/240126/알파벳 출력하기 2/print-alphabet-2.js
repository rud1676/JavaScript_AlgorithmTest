const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();

let n = Number(input);
let c = 'A'.charCodeAt(0);

for(let i = 0; i < n; i++) {
    let line = '';
    line += ' '.repeat(i * 2); // 각 줄마다 i*2만큼의 공백을 먼저 출력
    for(let j = 0; j < n - i; j++) {
        line += String.fromCharCode(c++);
        if(c > 'Z'.charCodeAt(0)) c = 'A'.charCodeAt(0);
        if(j < n - i - 1) line += ' '; // 알파벳 사이에 공백 추가
    }
    console.log(line); // 출력
}