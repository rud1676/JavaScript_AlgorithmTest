class Queue {
  constructor() {
    this.data = [];
    this.head = 0;
    this.tail = 0;
  }

  push(item) {
    this.data[this.tail++] = item;
  }

  pop() {
    this.head++;
  }

  front() {
    return this.data[this.head];
  }

  rear() {
    return this.data[this.tail - 1];
  }

  isEmpty() {
    return this.head === this.tail;
  }

  size() {
    return Math.abs(this.head - this.tail);
  }
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [R, C] = input[0].split(" ").map(Number);
const fire = new Queue();
const jihun = new Queue();
const map = Array.from({ length: R }, () => Array(C));
for (let i = 1; i <= R; i++) {
  const temp = input[i].split("");
  for (let j = 0; j < C; j++) {
    if (temp[j] === "J") {
      jihun.push([i - 1, j, 1]);
      map[i - 1][j] = 0;
    } else if (temp[j] === "F") {
      fire.push([i - 1, j]);
      map[i - 1][j] = 1;
    } else if (temp[j] === "#") {
      map[i - 1][j] = -1;
    } else {
      map[i - 1][j] = 0;
    }
  }
}
let visited;
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

fireBfs();
jihunBfs();

function fireBfs() {
  visited = Array.from({ length: R }, () => Array(C).fill(false));
  for (const [x, y] of fire.data) {
    visited[x][y] = true;
  }

  while (!fire.isEmpty()) {
    const [x, y] = fire.front();
    fire.pop();

    for (let k = 0; k < 4; k++) {
      const nx = x + dir[k][0];
      const ny = y + dir[k][1];

      if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;
      if (map[nx][ny] !== 0 || visited[nx][ny]) continue;

      map[nx][ny] = map[x][y] + 1;
      visited[nx][ny] = true;
      fire.push([nx, ny]);
    }
  }
}

function jihunBfs() {
  visited = Array.from({ length: R }, () => Array(C).fill(false));
  const [x, y] = jihun.front();
  visited[x][y] = true;

  while (!jihun.isEmpty()) {
    const [x, y, cnt] = jihun.front();
    jihun.pop();

    for (let k = 0; k < 4; k++) {
      const nx = x + dir[k][0];
      const ny = y + dir[k][1];

      if (nx < 0 || ny < 0 || nx >= R || ny >= C) {
        console.log(cnt);
        return;
      }
      // 다음 시점에서 이미 불이 나있으면 못감
      if (map[nx][ny] !== 0 && map[nx][ny] <= cnt + 1) continue;
      if (visited[nx][ny]) continue;
      // 벽일 때
      if (map[nx][ny] === -1) continue;

      visited[nx][ny] = true;
      jihun.push([nx, ny, cnt + 1]);
    }
  }

  console.log("IMPOSSIBLE");
}
