const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input.shift());
const check = Array(26).fill(0);
for (let i = 0; i < n; i++) {
  const ch = input.shift().split("")[0];
  check[ch.charCodeAt() - "a".charCodeAt()]++;
}
let result = "";
check.map((v, i) => {
  if (v >= 5) {
    result += String.fromCharCode(i + 97);
  }
});
if (result !== "") console.log(result);
else console.log("PREDAJA");
