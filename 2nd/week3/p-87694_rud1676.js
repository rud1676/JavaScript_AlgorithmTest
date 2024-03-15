let diff = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
function solution(rectangle, characterX, characterY, itemX, itemY) {
  var answer = 0;
  // 두배로 해서 색칠을 확실하게 구분하기!!

  const road = Array.from(Array(102), () => Array(102).fill(0));
  for (const r of rectangle) {
    const rec = r.map((v) => v * 2);
    for (let i = rec[1]; i <= rec[3]; i++) {
      for (let j = rec[0]; j <= rec[2]; j++) {
        if (i === rec[1] || i === rec[3] || j === rec[0] || j === rec[2]) {
          if (road[i][j] !== 2) road[i][j] = 1;
        } else road[i][j] = 2;
      }
    }
  } //안쪽은 모두 1로 채운다
  //길찾음
  let vst = Array.from(Array(102), () => Array(102).fill(0));
  let min = Infinity;

  function dfs(y, x, cnt) {
    if (y === itemY * 2 && x === itemX * 2) {
      min = Math.min(cnt, min);
    }
    for (let i = 0; i < 4; i++) {
      let ny = y + diff[i][0];
      let nx = x + diff[i][1];
      if (ny < 0 || ny >= 102 || nx < 0 || nx >= 102) continue;
      if (vst[ny][nx]) continue;
      if (road[ny][nx] !== 1) continue;
      vst[ny][nx] = 1;
      dfs(ny, nx, cnt + 1);
      vst[ny][nx] = 0;
    }
  }
  vst[characterY * 2][characterX * 2] = 1;
  dfs(characterY * 2, characterX * 2, 0);
  return Math.floor(min / 2);
}
