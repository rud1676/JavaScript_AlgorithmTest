const INPUT = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const N = Number(INPUT[0]);
  const cnt = {};
  const result = [];
  for (let i = 0; i < N; i++) {
    if (cnt[INPUT[i + 1][0]] !== undefined) cnt[INPUT[i + 1][0]]++;
    else cnt[INPUT[i + 1][0]] = 1;
  }

  for (let key in cnt) if (cnt[key] >= 5) result.push(key);
  result.sort();

  let str = "";
  result.map((v) => (str += v));
  if (str.length === 0) console.log("PREDAJA");
  else console.log(str);
}

solution();
