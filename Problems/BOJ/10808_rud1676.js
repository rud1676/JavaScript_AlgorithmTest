const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const result = Array(26).fill(0);

input[0].split("").map((v) => {
  result[v.charCodeAt() - "a".charCodeAt()]++;
});

result["a" - "a"] = result.map((v) => process.stdout.write(v + " "));
