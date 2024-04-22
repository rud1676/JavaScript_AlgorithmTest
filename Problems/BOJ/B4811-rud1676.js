const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const dp = Array.from(Array(31), () => Array(31).fill(0n));

function go(one, split) {
  //1개, 반개갯수 카운틍
  if (one === 0n && split === 0n) return 1n;
  if (dp[one][split]) return dp[one][split];

  let ret = dp[one][split];
  if (one > 0) {
    ret += go(one - 1n, split + 1n);
    dp[one][split] = ret;
  }
  if (split > 0) {
    ret += go(one, split - 1n);
    dp[one][split] = ret;
  }

  return ret;
}

function solution() {
  while (1) {
    const n = Number(input.shift()); // 100만번
    if (n === 0) return 0;

    console.log(go(BigInt(n), 0n).toString());
  }
}

solution();
