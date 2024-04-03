const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const n = +input.shift();
  const confs = [];
  for (let i = 0; i < n; i++) {
    let temp = input.shift().split(" ").map(Number);
    confs.push(temp);
  }
  confs.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }
    return b[0] - a[0];
  });
  let cnt = 0;
  let last = Infinity;
  for (let conf of confs) {
    if (last >= conf[1]) {
      last = conf[0];
      cnt++;
    }
  }
  console.log(cnt);
}

solution();
