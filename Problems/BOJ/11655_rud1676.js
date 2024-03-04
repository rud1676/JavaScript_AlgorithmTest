const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const str = input.shift();

let result = "";

for (let i = 0; i < str.length; i++) {
  let ch = str[i];
  let chcode = ch.charCodeAt();
  if (chcode >= 97 && chcode <= 122) {
    const n = (chcode + 13 - "a".charCodeAt()) % 26;
    ch = String.fromCharCode(n + "a".charCodeAt());
  } // 소문자 라면
  else if (chcode >= 65 && chcode <= 90) {
    const n = (chcode + 13 - "A".charCodeAt()) % 26;
    ch = String.fromCharCode(n + "A".charCodeAt());
  } // 소문자 라면
  result += ch;
}

console.log(result);
