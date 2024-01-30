const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [str, q] = input[0].split(" ");
str = str.split("");
q = Number(q);

for(let i = 1; i <= q; i++) {
    let query = input[i].split(" ");
    if(query[0] === '1') {
        // 1 a b : a번째 문자와 b번째 문자를 교환
        let a = Number(query[1]) - 1;
        let b = Number(query[2]) - 1;
        [str[a], str[b]] = [str[b], str[a]];
    } else if(query[0] === '2') {
        // 2 a b : 문자 a를 전부 문자 b로 변경
        str = str.map(char => char === query[1] ? query[2] : char);
    }
    console.log(str.join(""));
}