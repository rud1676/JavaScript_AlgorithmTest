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

const N = Number(INPUT.shift());

const [ga, gb, gc, gd] = INPUT.shift().split(" ").map(Number);

const list = [];
while (INPUT.length) list.push(INPUT.shift().split(" ").map(Number));
let cost = 99999999999999;
const ret = {};

function go() {
  for (let i = 0; i < 1 << N; i++) {
    let sum = [0, 0, 0, 0, 0];
    result = []; // 인덱스 담아두기

    for (let j = 0; j < N; j++) {
      if (i & (1 << j)) {
        result.push(j + 1); // 방문한 인덱스 담아두고

        for (let k = 0; k < 5; k++) sum[k] += list[j][k];
      }
    }

    if (sum[0] >= ga && sum[1] >= gb && sum[2] >= gc && sum[3] >= gd) {
      if (cost >= sum[4]) {
        // 조건에 만족한다면
        cost = sum[4]; // 코스트 갱신
        if (!ret[cost]) {
          ret[cost] = [];
          ret[cost].push(result);
        } else {
          ret[cost].push(result);
        }
      }
    }
  }
}

go();
if (cost === 99999999999999) {
  console.log(-1);
} else {
  console.log(cost);
  console.log(ret[cost].sort()[0].join(" "));
}
