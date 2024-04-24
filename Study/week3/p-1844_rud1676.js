// dfs풀이는 안되나 ㅠㅜ
let n;
let m;
let diff = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
let min = Infinity;
function solution(maps) {
  var answer = 0;
  n = maps.length;
  m = maps[0].length;
  let vst = Array.from(Array(n), () => Array(m).fill(0));
  vst[0][0] = 1;

  let que = [];
  que.push([0, 0]);
  let cnt = 0;
  while (que.length !== 0) {
    let size = que.length;
    cnt++;
    while (size--) {
      let cur = que.shift();
      for (let i = 0; i < 4; i++) {
        const ny = cur[0] + diff[i][0];
        const nx = cur[1] + diff[i][1];
        if (
          ny < 0 ||
          nx < 0 ||
          ny >= n ||
          nx >= m ||
          vst[ny][nx] ||
          maps[ny][nx] === 0
        )
          continue;
        if (ny === n - 1 && nx === m - 1) return cnt + 1;
        vst[ny][nx] = 1;
        que.push([ny, nx]);
      }
    }
  }

  return -1;
}
