function solution(n) {
  const triangle = new Array(n).fill().map((_, index) => new Array(index + 1).fill(null));

  triangle[0][0] = 1;
  let num = 2;
  let [px, py] = [0, 0];

  while (1) {
    let flag = 0;

    while (px < n - 1 && !triangle[px + 1][py]) {
      triangle[px + 1][py] = num;
      px += 1;
      num += 1;
      flag = 1;
    }

    while (py < px && !triangle[px][py + 1]) {
      triangle[px][py + 1] = num;
      py += 1;
      num += 1;
      flag = 1;
    }

    while (px > 0 && py > 0 && !triangle[px - 1][py - 1]) {
      triangle[px - 1][py - 1] = num;
      py -= 1;
      px -= 1;
      num += 1;
      flag = 1;
    }

    if (!flag) break;
  }

  return triangle.flat();
}