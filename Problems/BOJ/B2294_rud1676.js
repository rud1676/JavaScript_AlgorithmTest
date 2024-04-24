const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
function solution() {
  // n < 100, k<10000
  const [n, k] = input.shift().split(" ").map(Number);
  const dp = Array(10001).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < n; i++) {
    const v = Number(input.shift());
    for (let i = v; i <= k; i++) dp[i] = Math.min(dp[i], dp[i - v] + 1);
  }

  if (dp[k] === Infinity) console.log(-1);
  else console.log(dp[k]);
}

solution();
