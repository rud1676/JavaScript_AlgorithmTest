// 데이터 처리를 어떻게 할것인가?;; => 시간에관한것 => 모두 초로 바꾼다 떠오르기
// 밀리세컨드는 그냥 1000을 곱해서 처리한다.
// 특정시간을 기준으로 겹치는게 몇개인지만 연산해두면 된다.
// 다시풀어보기
function solution(lines) {
  var answer = 0;
  // 시작 - 끝으로 데이터 처리
  let datas = [];

  lines.map((v) => {
    const arr = v.split(" ");
    const duration = Number(arr[2].replace("s", ""));
    const temp = arr[1].split(":").map(Number);
    const cur = temp[0] * 3600000 + temp[1] * 60000 + temp[2] * 1000;
    const end = cur + 999;
    const start = cur - duration * 1000 + 1;
    datas.push(["start", start]);
    datas.push(["end", end]);
  });
  datas.sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : -1));

  let cnt = 0;
  for (let data of datas) {
    if (data[0] === "start") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }
  return answer;
}
