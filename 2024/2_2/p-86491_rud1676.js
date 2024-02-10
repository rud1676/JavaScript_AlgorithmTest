function solution(sizes) {
  var answer = 0;
  let maxw = 0;
  let maxh = 0;

  sizes.map((v) => {
    maxw = Math.max(maxw, v[0]);
    maxh = Math.max(maxh, v[1]);
  });
  if (maxw >= maxh) {
    // 가로가 더길면...
    maxh = 0;
    sizes.map((v) => {
      //세로가 더 길면 돌린다.
      if (v[0] <= v[1]) maxh = Math.max(maxh, v[0]);
      else maxh = Math.max(maxh, v[1]);
    });
  } else {
    maxw = 0;
    sizes.map((v) => {
      //세로가 더 길면 돌린다.
      if (v[1] <= v[0]) maxw = Math.max(maxw, v[1]);
      else maxw = Math.max(maxw, v[0]);
    });
  }
  return maxw * maxh;
}
