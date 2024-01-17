const INPUT = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = INPUT.shift()
  .split(" ")
  .map((v) => Number(v));

function solution() {
  const j = Number(INPUT.shift());

  let l = 1;
  let cnt = 0;
  let r = l + m - 1;

  for (let i = 0; i < j; i++) {
    const apple = Number(INPUT.shift());
    if (apple < l) {
      cnt += l - apple;
      l = apple;
    } else if (apple > r) {
      cnt += apple - r;
      l = apple - m + 1;
    } else continue;
    r = l + m - 1;
  }
  console.log(cnt);
}
solution();
