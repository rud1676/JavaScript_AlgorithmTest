const INPUT = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// N(0 ≤ N ≤ 100,000)에 있고, 동생은 점 K(0 ≤ K ≤ 100,000)
// 100,000이면 연산이 끝나지않나?
// bfs로 푸는데 흔적을 어케남기지.
// prev[next] = here로 남긴다!!
// 자꾸 시간초과가 뜬다 ㅠ => 같을 경우 예외처리를 안해줌 !

const maxn = 200004; // 최대 범위

const [n, k] = INPUT[0].split(" ").map(Number);
const visit = Array(maxn).fill(0);
const que = [];
const prev = Array(maxn).fill(0);

function bfs() {
  if (n == k) {
    console.log(`0\n${n}`);
    return;
  }
  que.push(n);
  while (que.length) {
    //bfs로 푼다.
    let nn = que.shift(); // 큐를 꺼낸다.
    if (nn === k) {
      break;
    }
    for (let nx of [nn - 1, nn + 1, nn * 2]) {
      if (nx < 0 || nx > 100004 || visit[nx] !== 0 || nx === n) continue;
      prev[nx] = nn;
      visit[nx] = visit[nn] + 1;
      que.push(nx);
    }
  }

  const result = [k];
  for (let i = prev[k]; i !== n; i = prev[i]) {
    result.push(i); // 시간복잡도 n임 쓰지말자!
  }
  result.push(n);
  console.log(visit[k]);
  console.log(result.reverse().join(" "));
}

bfs();
