const INPUT = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
/* 실제 알고리즘 푸는곳 */
function solution() {
  const prices = INPUT[0].split(" ").map((v) => Number(v));
  let cars = INPUT.slice(1, 4);
  cars = cars.map((v) => {
    return v.split(" ").map((vv) => Number(vv));
  });
  let total = 0;

  for (let i = 1; i <= 100; i++) {
    let cnt = 0;
    for (let arr of cars) {
      if (arr[0] < i && arr[1] >= i) {
        cnt++;
      }
    }
    if (cnt !== 0) {
      total += prices[cnt - 1] * cnt;
    }
  }

  console.log(total);
}

solution();
