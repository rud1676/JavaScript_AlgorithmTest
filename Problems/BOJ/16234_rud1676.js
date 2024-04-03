const INPUT = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const dxy = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

// 거의 디버깅 하느라 1시간 걸린거 같네 ㅠ

const [n, l, r] = INPUT.shift()
  .split(" ")
  .map((v) => Number(v));

let mp = Array.from(Array(n), () => Array(n).fill(0)); //최초 맵 입력을 위함
let gp = []; // 총합이 어떤 좌표들의 총합인지 알기 위해 좌표들을 넣는 배열

function dfs(visit, y, x) {
  //조건이 맞았을 때 방문하면서 총합 더하기.
  visit[y][x] = 1;
  let ret = mp[y][x];

  for (let i = 0; i < 4; i++) {
    const ny = y + dxy[i][0];
    const nx = x + dxy[i][1];

    if (ny >= n || ny < 0 || nx >= n || nx < 0 || visit[ny][nx] !== 0) continue; //범위체크 방문햇는지 체크
    const diff = Math.abs(mp[ny][nx] - mp[y][x]);

    if (diff < l || diff > r) continue; // 인구차이가 범위밖이라면...

    // console.log("dfs한번더 들어가!");
    gp.push([ny, nx]);

    ret += dfs(visit, ny, nx);
  }
  return ret;
}

function solution() {
  for (let i = 0; i < n; i++) {
    INPUT.shift()
      .split(" ")
      .map((v, j) => {
        mp[i][j] = Number(v);
      });
  }

  // 한번이라도 인구이동 체크
  let check = true;

  // 인구이동 카운트
  let cnt = 0;

  while (check) {
    // 최대 2000번
    check = false;
    const visit = Array.from(Array(n), () => Array(n).fill(0));
    const mp2 = JSON.parse(JSON.stringify(mp));

    // 한싸이클 돌리기 -> visit 0,0으로 초기화 한채로.
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (visit[i][j] === 0) {
          const total = dfs(visit, i, j);

          if (gp.length !== 0) {
            // 방문한 좌표가 있으면
            gp.push([i, j]); // 최초좌표 입력후
            check = true;
            const avg = Math.floor(total / gp.length); // 평균 + 할당
            gp.map((v) => {
              mp2[v[0]][v[1]] = avg;
            });
            gp = [];
          }
        }
      }
    }
    mp = JSON.parse(JSON.stringify(mp2));

    if (check) cnt++;
  }
  console.log(cnt);
}

solution();
