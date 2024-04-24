// 마라톤 완주 못한사람 찾기
function solution(participant, completion) {
  var answer = "";
  const hash = {};
  participant.map((v) => {
    if (!hash[v]) hash[v] = 1;
    else hash[v]++;
  });
  completion.map((v) => {
    hash[v]--;
  });
  for (let key of Object.keys(hash)) {
    if (hash[key] !== 0) answer = key;
  }
  return answer;
}
