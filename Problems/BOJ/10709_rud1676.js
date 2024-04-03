const INPUT = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [h, w] = INPUT.shift()
  .split(" ")
  .map((v) => Number(v));

function solution() {
  const mp = Array.from(Array(INPUT.length), () =>
    Array(INPUT[0].length).fill(-1)
  );
  for (let y = 0; y < h; y++) {
    let cnt = -1;
    for (let x = 0; x < w; x++) {
      if (INPUT[y][x] === "c") {
        cnt = 0;
      } else if (cnt > -1) {
        cnt++;
      }
      mp[y][x] = cnt;
    }
  }

  for (let i = 0; i < mp.length; i++) {
    console.log(mp[i].join(" "));
  }
}

solution();
