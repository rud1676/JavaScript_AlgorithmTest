// https://www.acmicpc.net/problem/1285

// solve 1 => 비트마스킹 & 배열 혼합해서 품
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 비트마스킹으로 각 뒤집을 케이스 한줄로 구현
// H,T많은거 더하기

// 글자수 세기
const cnt = (mp, n) => {
  let min = 0;
  for (let i = 0; i < n; i++) {
    //cnt H
    let cnt = 0;
    for (let j = 0; j < n; j++) {
      if (mp[j][i] === "H") cnt++;
    }
    min += Math.min(cnt, n - cnt);
  }
  return min;
};

const solution = () => {
  const n = Number(input.shift());
  const org = input.map((v) => v.split(""));

  let result = Infinity;
  for (let i = 0; i < 1 << n; i++) {
    let mp = [];
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        mp[j] = org[j].map((v) => {
          if (v === "H") return "T";
          if (v === "T") return "H";
        });
      } else {
        mp[j] = org[j];
      }
    }

    result = Math.min(result, cnt(mp, n));
    // 글자수 세는게 20*20 400
  }
  console.log(result);
};

solution();

// 풀이 2 온리 비트마스킹 => HT자체를 10으로 표현하고 뒤집는걸 yeild연산자로 표현!
/*
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 비트마스킹으로 각 뒤집을 케이스 한줄로 구현
// H,T많은거 더하기 배열 자체를 또 비트마스킹으로 구현했으면 좋았을듯.
let result = Infinity;
const n = Number(input.shift());

function go(org, here) {
  if (here === n) {
    let total = 0;
    for (let j = 1; j < 1 << n; j *= 2) {
      let cnt = 0;
      for (let i = 0; i < n; i++) {
        if (org[i] & j) {
          cnt++;
        }
      }
      total += Math.min(cnt, n - cnt);
    }
    result = Math.min(result, total);
    return;
  }
  go(org, here + 1);
  org[here] = ~org[here];
  go(org, here + 1);
}

const solution = () => {
  const org = input.map((v) => {
    let tp = 0;
    let cnt = 1;
    for (let i = 0; i < n; i++) {
      if (v[i] === "H") tp = tp | cnt;
      cnt *= 2;
    }
    return tp;
  });

  go(org, 0);
  console.log(result);
  // 모든 경우 탐색을 dfs로
};

solution();

*/
