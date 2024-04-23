const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let dp;
let tr = [];
function trace(n) {
  if (n % 3 === 0 && dp[Math.floor(n / 3)] === dp[n] - 1)
    trace(Math.floor(n / 3));
  else if (n % 2 === 0 && dp[Math.floor(n / 2)] === dp[n] - 1)
    trace(Math.floor(n / 2));
  else if (dp[n - 1] === dp[n] - 1) trace(n - 1);

  tr.push(n);
}

function solution() {
  const n = Number(input[0]);
  dp = Array(n + 1).fill(Infinity);
  dp[1] = 0;
  for (let i = 2; i <= n; i++) {
    if (i % 3 === 0) dp[i] = Math.min(dp[Math.floor(i / 3)] + 1, dp[i]);
    if (i % 2 === 0) dp[i] = Math.min(dp[Math.floor(i / 2)] + 1, dp[i]);
    dp[i] = Math.min(dp[i - 1] + 1, dp[i]);
  }
  console.log(dp[n]);
  trace(n);
  console.log(tr.reverse().join(" "));
}

solution();
