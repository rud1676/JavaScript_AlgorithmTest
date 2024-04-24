const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 문제를 잘못 읽음 ㅅㅂ

const [n, m] = input.shift().split(" ").map(Number);
const mp = [];
for (let i = 0; i < n; i++) {
  mp.push(input.shift().split(" ").map(Number));
}
const diff = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function solution() {
  const ch = [];
  const hs = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (mp[i][j] === 2) ch.push([i, j]);
      else if (mp[i][j] === 1) hs.push([i, j]);
    }
  }

  let tc = [];
  let vst = Array(ch.length).fill(0);
  let min = Infinity;

  function dfs(s, cnt) {
    if (cnt === m) {
      // checking 치킨거리
      let dist = 0;
      for (let home of hs) {
        let mindist = Infinity;
        for (let chic of tc) {
          // 가로세로 빼줘가지고 최솟값이 치킨 거리임
          mindist = Math.min(
            Math.abs(home[0] - chic[0]) + Math.abs(home[1] - chic[1]),
            mindist
          );
        }
        dist += mindist;
      }

      if (min > dist) min = dist;
      return;
    }

    for (let i = s; i < ch.length; i++) {
      if (vst[i]) continue;

      vst[i] = 1;
      tc.push(ch[i]);

      dfs(i, cnt + 1);

      vst[i] = 0;
      tc.pop();
    }
  }
  dfs(0, 0);

  console.log(min);
}

solution();
