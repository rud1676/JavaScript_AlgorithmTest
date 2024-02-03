//1. 한바퀴 돌면서 Change와 줄수를 추출
//2. uid => nickname매칭
function solution(record) {
  var answer = [];
  const hash = {};
  record.forEach((v) => {
    const [com, id, nick] = v.split(" ");
    if (com === "Enter") hash[id] = nick;
    else if (com === "Change") hash[id] = nick;
  });
  record.forEach((v) => {
    const [com, id, _] = v.split(" ");
    if (com === "Enter") answer.push(`${hash[id]}님이 들어왔습니다.`);
    else if (com === "Leave") answer.push(`${hash[id]}님이 나갔습니다.`);
  });
  return answer;
}
