const INPUT = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 강의를 들으며 수정한 코드
// 이전 코드의 문제점은 중복되는 검색이 너무많다.

/*
let dy = [0, 0, 1, -1];
let dx = [1, -1, 0, 0];
const [a, b, c] = INPUT.shift()
  .split(" ")
  .map((v) => Number(v));
const solution = () => {
  const mp = Array.from(Array(a), () => Array(b).fill(0));

  for (let i = 0; i < c; i++) {
    const rect = INPUT.shift()
      .split(" ")
      .map((v) => Number(v));
    for (let x = rect[0]; x < rect[2]; x++) {
      for (let y = rect[1]; y < rect[3]; y++) {
        mp[y][x] = -1;
      }
    }
  }
  let cnt = 1;

  for (let y = 0; y < a; y++) {
    for (let x = 0; x < b; x++) {
      if (mp[y][x] === 0) {
        dfs(y, x, mp, cnt);
        cnt++;
      }
    }
  }
  // 카운팅을 하기위해 다시 맵 전체를 돈다 => 이것이 비효율적..
  const result = Array(cnt).fill(0);
  for (let y = 0; y < a; y++) {
    for (let x = 0; x < b; x++) {
      if (mp[y][x] !== -1) result[mp[y][x]]++;
    }
  }
  result.shift();
  console.log(cnt - 1);
  console.log(result.sort((a, b) => a - b).join(" "));
};

function dfs(y, x, mp, cnt) {
  if (mp[y][x] !== 0) return;
  mp[y][x] = cnt;
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= b || nx < 0 || ny >= a || ny < 0 || mp[ny][nx] !== 0) continue;
    dfs(ny, nx, mp, cnt);
  }
}

solution();
*/

///////////바꾼코드///////////

let dy = [0, 0, 1, -1];
let dx = [1, -1, 0, 0];
const [a, b, c] = INPUT.shift()
  .split(" ")
  .map((v) => Number(v));
const solution = () => {
  const mp = Array.from(Array(a), () => Array(b).fill(0));

  for (let i = 0; i < c; i++) {
    const rect = INPUT.shift()
      .split(" ")
      .map((v) => Number(v));
    for (let x = rect[0]; x < rect[2]; x++) {
      for (let y = rect[1]; y < rect[3]; y++) {
        mp[y][x] = -1;
      }
    }
  }
  let cnt = 1;
  const result = [];

  for (let y = 0; y < a; y++) {
    for (let x = 0; x < b; x++) {
      if (mp[y][x] === 0) {
        result.push_back(dfs(y, x, mp, cnt));
      }
    }
  }

  console.log(result.length);
  console.log(result.sort((a, b) => a - b).join(" "));
};

// Javascrip md파일로 옮겨놓아야겟다
function dfs(y, x, mp, cnt) {
  if (mp[y][x] !== 0) return;
  let ret = 1; // 정점에 가치를 매긴다 (1로!!)
  mp[y][x] = cnt;
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= b || nx < 0 || ny >= a || ny < 0 || mp[ny][nx] !== 0) continue;
    ret += dfs(ny, nx, mp, cnt); // 순회되는 정점의 가치를 더한다. - 모든 정점의 가치가 1이므로 탐색한 노드의 값이 나온다!
  }
  return ret;
}

solution();
