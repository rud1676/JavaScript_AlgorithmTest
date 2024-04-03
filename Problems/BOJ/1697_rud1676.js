const diff = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
// 사전순 만족은 어떻게 처리하누..

//cost에 해당하는 배열값들을 넣어 정렬하자

const INPUT = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = INPUT[0].split(" ").map(Number);
//console.log(n,k);

const visit = Array(200000).fill(0);

function bfs() {
  const que = [];
  que.push(n);
  visit[n] = 0;

  while (que.length) {
    let p = que.shift();
    if (p === k) break;
    for (let x of [p + 1, p - 1, p * 2]) {
      if (x < 0 || x >= 200000 || visit[x] || x === n) continue;
      visit[x] = visit[p] + 1;
      que.push(x);
    }
  }
  console.log(visit[k]);
}
bfs();
