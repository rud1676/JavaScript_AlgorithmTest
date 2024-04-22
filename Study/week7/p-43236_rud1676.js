// 다시풀어보기
function solution(distance, rocks, n) {
  var answer = 0;
  rocks.sort((a, b) => a - b);
  rocks.push(distance);
  let left = 0;
  let right = distance;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let cur = 0;
    let rcnt = 0;
    let dist = 0;
    for (let r of rocks) {
      dist = r - cur;
      if (dist < mid) {
        rcnt++;
      } else {
        cur = r;
      }
    }
    if (rcnt <= n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
}
