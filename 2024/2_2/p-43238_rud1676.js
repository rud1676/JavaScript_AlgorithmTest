function check(times, t, n) {
  let cnt = 0;
  times.map((v) => {
    cnt += Math.floor(t / v);
  });
  if (cnt >= n) return true;
  return false;
}

function solution(n, times) {
  let lo = 1;
  //hi 의 범위를 잘못잡았다. 시간 찾는건대...
  let hi = Math.max(...times) * n;
  let mid = 0;
  while (lo <= hi) {
    mid = Math.floor((lo + hi) / 2);
    if (check(times, mid, n)) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return lo;
}
