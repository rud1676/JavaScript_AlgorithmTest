const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(Number);
const N = input.shift();
let answer = 0;
let s = [];
for (let i = 0; i < N; i++) {
  const now = input[i];

  let same = 1;
  while (s.length > 0 && s[s.length - 1].value <= now) {
    answer += s[s.length - 1].same;

    if (s[s.length - 1].value == now) {
      same = s[s.length - 1].same + 1;
    } else {
      same = 1;
    }
    s.pop();
  }
  if (s.length > 0) {
    answer++;
  }
  s.push({ value: now, same });
}

console.log(answer);
