const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [c, r] = input.shift().split(" ").map(Number);

function solution() {
  let result = 0;
  for (let i = 0; i < 1 << (c * r); i++) {
    //각 케이스 생성
    let sum = 0;

    //가로 먼저 더하자(가로체킹은 1)
    for (let j = 0; j < c; j++) {
      let xsum = "";
      for (let k = 0; k < r; k++) {
        let pos = 1 * 2 ** (j * r);
        if (i & (pos * 2 ** k)) {
          xsum += input[j][k];
        } else {
          if (xsum !== "") sum += Number(xsum);
          xsum = "";
        }
      }
      if (xsum !== "") sum += Number(xsum);
    }

    //세로 더하기(세로체킹은 0)
    for (let j = 0; j < r; j++) {
      let ysum = "";
      for (let k = 0; k < c; k++) {
        let pos = 1 * 2 ** j;
        if (!(i & (pos * 2 ** (k * r)))) {
          ysum += input[k][j];
        } else {
          if (ysum !== "") sum += Number(ysum);
          ysum = "";
        }
      }
      if (ysum !== "") sum += Number(ysum);
    }
    result = Math.max(sum, result);
  }
  console.log(result);
}

solution();
