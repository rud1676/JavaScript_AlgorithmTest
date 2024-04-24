/* 그리디:정렬후 - 구간 밖이 나올때 마다 cnt++*/
/* 시작점으로 정렬햇는데 틀림 => 끝점으로 안하면 크게 커버되는 것에 놓칠 수 있음. */
function solution(targets) {
  var answer = 0;
  targets.sort((a, b) => {
    return a[1] - b[1];
  });
  let prev = 0;
  for (let t of targets) {
    if (prev <= t[0]) {
      prev = t[1];
      answer++;
    }
  }
  return answer;
}
