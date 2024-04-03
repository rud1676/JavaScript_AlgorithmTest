const INPUT = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(INPUT.shift());

function solution() {
  let [a, b] = [0, 0];
  let [at, bt] = [0, 0];
  let prev = 0;
  for (let i = 0; i < n; i++) {
    const [team, time] = INPUT.shift().split(" ");
    const [m, s] = time.split(":").map((v) => Number(v));
    if (a > b) {
      at += m * 60 + s - prev;
    } else if (b > a) {
      bt += m * 60 + s - prev;
    }

    if (team === "1") a++;
    else b++;
    prev = 60 * m + s;
  }
  if (a > b) {
    at += 48 * 60 - prev;
  } else if (b > a) {
    bt += 48 * 60 - prev;
  }

  console.log(
    `${Math.floor(at / 60)
      .toString()
      .padStart(2, "0")}:${(at % 60).toString().padStart(2, "0")}`
  );
  console.log(
    `${Math.floor(bt / 60)
      .toString()
      .padStart(2, "0")}:${(bt % 60).toString().padStart(2, "0")}`
  );
}

solution();
