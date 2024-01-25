// 5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
const [n, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 첫 번째 줄은 선수의 수입니다.

// 선수들의 성의 첫 글자를 저장할 배열을 선언합니다.
let players = [];

// 각 선수의 성의 첫 글자를 배열에 추가합니다.
for (let i = 0; i < n && i < arr.length; i++) {
  players.push(arr[i][0]);
}

// 출력할 문자열을 저장할 변수를 선언합니다.
let answer = "";
// 성의 첫 글자를 사전순으로 정렬합니다.
players.sort();
// 각 성의 첫 글자에 대해
for (let i = 0; i < players.length; i++) {
  let player = players[i];
  // 같은 첫 글자의 수를 세고
  let count = players.filter((p) => p === player).length;
  // 그 수가 5 이상이면
  if (count >= 5) {
    // 해당 첫 글자를 출력 문자열에 추가합니다.
    // 단, 이미 추가된 첫 글자는 다시 추가하지 않습니다.
    if (!answer.includes(player)) answer += player;
  }
}
// 5명 이상인 첫 글자가 없으면 "PREDAJA"를 출력하고, 있으면 해당 첫 글자들을 출력합니다.
console.log(answer || "PREDAJA");
