const fs = require("fs");
// 입력받은 값을 공백을 기준으로 나누고 숫자로 변환합니다.
const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

const A = input[0],
  B = input[1],
  C = input[2];

// A를 B번 곱한 수를 C로 나눈 나머지를 계산하는 함수를 정의합니다.
function power(A, B) {
  // B가 1이면 A % C를 반환합니다. (기저 조건)
  if (B === 1) {
    return A % C;
  }
  // B를 2로 나눈 몫에 해당하는 거듭제곱을 미리 계산합니다.
  const temp = power(A, B >> 1);
  // temp를 제곱하고 C로 나눈 나머지를 구합니다.
  const result = (temp * temp) % C;
  // B가 짝수일 경우, result를 반환합니다.
  if (B % 2 === 0) {
    return result;
  }
  // B가 홀수일 경우, result에 A를 곱한 후 C로 나눈 나머지를 반환합니다.
  else {
    return (result * A) % C;
  }
}

// 최종 결과를 출력합니다.
console.log(power(A, B));