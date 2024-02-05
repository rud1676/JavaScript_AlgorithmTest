// 1011 => 11
// 11 =>

// 개어렵게 푸렁센ㅇ ㅠ
function solution(n) {
  let answer = [];
  let cnt = 1;
  while (n !== 0) {
    const rest = n % 3;
    if (rest === 0) {
      answer.push("4");
    } else if (rest === 1) {
      answer.push("1");
    } else if (rest === 2) answer.push("2");
    n -= rest ? rest : 3;
    n = Math.floor(n / 3);
    cnt++;
  }
  return answer.reverse().join("");
}
