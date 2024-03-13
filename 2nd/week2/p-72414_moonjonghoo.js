function convertsecond(time) {
  let stime = time.split(":").map(Number);
  let convert = stime[0] * 60 * 60 + stime[1] * 60 + stime[2];
  return convert;
}

function converttime(time) {
  let a = 0;
  let b = 0;
  let c = 0;
  if (time / (60 * 60) > 0) {
    a = Math.floor(time / (60 * 60));
    time = time % (60 * 60);
  }
  if (time / 60 > 0) {
    b = Math.floor(time / 60);
    time = time % 60;
  }
  c = time;
  a = a > 9 ? a : "0" + `${a}`;
  b = b > 9 ? b : "0" + `${b}`;
  c = c > 9 ? c : "0" + `${c}`;
  return `${a}:${b}:${c}`;
}

function solution(play_time, adv_time, logs) {
  let tabletime = convertsecond(play_time);
  let adtime = convertsecond(adv_time);
  let dp = Array.from({ length: tabletime + 1 }, () => 0);
  for (let i = 0; i < logs.length; i++) {
    let test = logs[i].split("-");
    let start = test[0];
    let end = test[1];
    let st = convertsecond(start);
    let sy = convertsecond(end);
    dp[st]++;
    dp[sy]--;
  }
  for (let i = 1; i <= tabletime; i++) {
    dp[i] += dp[i - 1];
  }
  for (let i = 1; i <= tabletime; i++) {
    dp[i] += dp[i - 1];
  }
  let initalsum = dp[adtime - 1];
  let start = 0;
  for (let i = adtime - 1; i < tabletime; i++) {
    if (initalsum < dp[i] - dp[i - adtime]) {
      initalsum = dp[i] - dp[i - adtime];
      start = i - adtime + 1;
    }
  }
  return converttime(start);
}

console.log(
  solution("02:03:55", "00:14:15", [
    "01:20:15-01:45:14",
    "00:40:31-01:00:00",
    "00:25:50-00:48:29",
    "01:30:59-01:53:29",
    "01:37:44-02:02:30",
  ])
);

// 이분탐색 => 구간을 잘라서 해야됨.
//구간이 play_time -adv_time  이되겠다.
//해당구간에서 이분탐색으로 쭉쭉나가면서 가장큰값이될때..?
//시간이 언제가장 많이 겹치냐를 찾아야됨.
// dp?
// 0~~ 전체구간
// 각구간에 몇명이 서식하는지를 기록
//  00초부터 각구간별 시청자수가 가장많은쪽으로 더해주면됨.
// 초단위로 시간을 변환해주고 => dp테이블을 시간별로만들어준다.
//시청중일떄 시청자수 +1, 시청안할떄 -1,
//각초별 몇명시청중인지를 구하고
//00~00+adv_time 구간에서 얼마나 시청량이있는지 합을 구해서 가장큰 빠른시작초 리턴
