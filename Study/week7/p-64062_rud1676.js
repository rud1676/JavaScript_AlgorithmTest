function solution(stones, k) {
  // 스톤의 길이는 20만, 200,000,000 20억

  // 몇명까지 => mid가 정답이라 하면.(이 과정을 줄여야된다.)
  // 다 통과하면 => mid를 늘려
  // 아니면 줄여
  function check(mid) {
    let cnt = 0;
    for (let stone of stones) {
      stone = stone - mid + 1;
      if (stone > 0) cnt = 0;
      else {
        cnt++;
      }
      if (cnt >= k) return false;
    }
    return true;
  }
  let left = 0;
  let right = 200000001;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (check(mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  // 효율성테스트 모두 실패 왜?
  // 반복문 두번..

  return right;
}
