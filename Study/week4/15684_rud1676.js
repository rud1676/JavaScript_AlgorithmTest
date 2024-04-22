const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 300 개가 놓을 수 있는 경우

const [n, m, h] = input.shift().split(" ").map(Number);
const mp = Array.from(Array(h + 2), () => Array(n + 2).fill(0));
let ans = 99;
// 1 -- 0
// 0 -- 1

function ck(cnt) {
  for (let i = 1; i <= n; i++) {
    // 왼쪽부터 끝까지 검사
    cur = i;
    for (let j = 1; j <= h; j++) {
      if (mp[j][cur]) {
        // 1 -- 0 오른쪽 무브
        cur++;
      } else if (cur > 0 && mp[j][cur - 1]) {
        //왼쪽 사다리
        cur--;
      }
    }

    if (cur !== i) return false;
  }
  return true;
}

function go(here, cnt) {
  // here은 높이로
  if (cnt > 3 || ans <= cnt) return;

  if (ck(cnt)) {
    ans = Math.min(cnt, ans);
  }
  for (let i = here; i <= h; i++) {
    // 행
    for (let j = 1; j <= n; j++) {
      if (mp[i][j] || mp[i][j - 1] || mp[i][j + 1]) continue;
      mp[i][j] = 1;
      go(i, cnt + 1);
      mp[i][j] = 0;
    }
  }
}

function solution() {
  for (let i = 0; i < m; i++) {
    const [a, b] = input.shift().split(" ").map(Number);
    mp[a][b] = 1;
  }
  go(1, 0);
  if (ans == 99) console.log(-1);
  else console.log(ans);
  return 0;
}

solution();
