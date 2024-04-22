function solution(n) {
  var answer = [];

  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(Array(i).fill(0));
  }
  let cnt = 0; // 걸음 카운팅
  let col = 0; // 실제 저장 column
  let row = 0; // 실제 저장 row
  let rot = 0; // 방향 설정
  let depth = n; // 몇까지 가야되늰지 설정
  for (let i = 1; i <= Math.floor((n * (n + 1)) / 2); i++) {
    cnt++;
    if (rot === 0) {
      arr[col++][row] = i;
    } else if (rot === 1) {
      arr[col][row++] = i;
    } else {
      arr[col--][row--] = i;
    }
    if (cnt === depth || (cnt === depth - 1 && rot === 2)) {
      cnt = 1;
      if (rot === 0) {
        col--;
        row++;
      }
      if (rot === 1) {
        col--;
        row -= 2;
      }
      if (rot === 2) {
        depth = depth - 3;
        col += 2;
        row++;
        cnt = 0;
      }
      rot = (rot + 1) % 3;
    }
  }

  return arr.flat();
}
