const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
// anta tica
// a n t i c 부터
// 0 2 7 12 18
// a b c d e f g h i j k l  m  n  o  p  q  r  s  t  u v w x y z
// 0 1 2 3 4 5 6 6 7 8 9 10 11 12 13 14 15 16 17 18
// 나머지 21
// 2의 20제곱 * 20 * 50 * 15 할만해!

const [n, m] = input.shift().split(" ").map(Number);
// 배열로 콤비네이션 생성하니 에러가 떳다...
// 그렇다면 이걸 어떻게 함수스택으로 짤까

const words = input.map((v) => {
  let mask = 0;
  for (let i = 0; i < v.length; i++) {
    //console.log(1 << (v[i) - 65));
    mask |= 1 << (v[i].charCodeAt() - 97);
  }
  return mask;
});

function count(mask) {
  let result = 0;
  for (let word of words) {
    if (word && (word & mask) === word) {
      result++;
    }
  }
  return result;
}

function go(idx, k, mask) {
  if (k < 0) return 0;
  if (idx === 26) return count(mask);
  let ret = go(idx + 1, k - 1, mask | (1 << idx));
  if (
    idx !== "a".charCodeAt() - 97 &&
    idx !== "n".charCodeAt() - 97 &&
    idx !== "t".charCodeAt() - 97 &&
    idx !== "i".charCodeAt() - 97 &&
    idx !== "c".charCodeAt() - 97
  ) {
    ret = Math.max(ret, go(idx + 1, k, mask));
  }
  return ret;
}

function solution() {
  console.log(go(0, m, 0));
}

solution();

// 비트마스킹 + 조합에 관한 문제를 풀기가 좋았다!
