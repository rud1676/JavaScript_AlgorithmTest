const INPUT = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(BigInt);

// 1~10000
function solution() {
  INPUT.map((v) => {
    // 자리수 한자리 씩늘려서 %v ===0 인지 판별해보자
    if (v === 1n) {
      console.log(1);
      return;
    }
    let n = 1n;
    let i = 1n;
    while (true) {
      n += 10n ** i;
      i++;
      if (n % v === 0n) {
        console.log(i.toString());
        break;
      }
    }
  });
}

solution();
