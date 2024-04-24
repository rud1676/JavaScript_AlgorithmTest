const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [N, M, H] = input.shift().split(" ").map(Number);

let sadari = Array.from(Array(H), () => Array(N - 1).fill(false));
if (input.length > 0) {
  input
    .map((v) => v.split(" ").map(Number))
    .forEach((v) => {
      const [x, y] = v;
      sadari[x - 1][y - 1] = true;
    });
}

function checkSadari() {
  let success = true;
  for (let i = 0; i < N; i++) {
    let now = i;
    let cnt = 0;
    while (cnt < H) {
      if (now < N - 1 && sadari[cnt][now]) {
        now = now + 1;
      } else if (now > 0 && sadari[cnt][now - 1]) {
        now = now - 1;
      }
      cnt++;
    }
    if (now != i) {
      success = false;
      break;
    }
  }
  if (success) return true;
  return false;
}

function canDraw(x, y) {
  if (sadari[x][y]) return false;
  if (y > 0 && sadari[x][y - 1]) return false;
  if (y < N - 2 && sadari[x][y + 1]) return false;
  return true;
}

function drawSadari(cnt, end, last) {
  if (cnt == end) {
    if (checkSadari()) {
      return process.exit(console.log(end));
    }
  } else {
    for (let i = last; i < H * N; i++) {
      const x = Math.floor(i / N);
      const y = i % N;
      if (canDraw(x, y)) {
        sadari[x][y] = true;
        drawSadari(cnt + 1, end, i + 2);
        sadari[x][y] = false;
      }
    }
  }
}

function main() {
  for (let i = 0; i <= 3; i++) {
    drawSadari(0, i, 0);
  }
  return console.log(-1);
}

main();
