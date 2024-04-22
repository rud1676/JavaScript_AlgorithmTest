function solution(n, m, x, y, r, c, k) {
  let move = [r - x, y - c, c - y, x - r].map((v) => Math.max(0, v));
  let [dCount, lCount, rCount, uCount] = move;
  let moveSum = move.reduce((a, b) => a + b);

  const diff = k - moveSum;
  if (diff < 0 || diff % 2 == 1) return "impossible";
  const vMove = Math.min(diff / 2, n - x - dCount);
  dCount += vMove;
  uCount += vMove;
  const hMove = diff / 2 - vMove;
  lCount += hMove;
  rCount += hMove;

  let answer = dCount ? "d".repeat(dCount) : "";
  let hStart = y;
  while (lCount > 0) {
    if (hStart > 1) {
      hStart--;
      answer += "l";
    } else {
      answer += "rl";
      rCount--;
    }
    lCount--;
  }
  answer += rCount ? "r".repeat(rCount) : "";
  answer += uCount ? "u".repeat(uCount) : "";
  return answer;
}
