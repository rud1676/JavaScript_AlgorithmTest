// 처음 푼거.
// 단순무식 for문 => 20억번..ㅠ
// for문으로 안되는걸 미리 알았어야됨!
/*
const INPUT = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const [a, b, c] = INPUT[0].split(" ").map((v) => Number(v));
  let r = 1;
  for (let i = 0; i < b; i++) {
    r = (r * a) % c;
    if (r === 0) break;
  }
  console.log(r);
}

solution();
 */
// a^4 = a^2 x a^2에서 a^2자체를 담아둔다!
// go(2,64) => go(2,32) => go(2,16)... 이렇게 줄여준다!
// 또한 Number은 범위를 넘어선다. BigInt사용!!

const INPUT = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

const [a, b, c] = INPUT;

function go(a, b) {
  if (b === 1n) return a % c;
  ret = go(a, b / 2n);
  ret = (ret * ret) % c;
  if (b % 2n === 1n) ret = (ret * a) % c;
  return ret;
}

function solution() {
  console.log(go(a, b).toString());
}

solution();
