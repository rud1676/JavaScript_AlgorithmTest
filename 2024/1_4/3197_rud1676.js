const diff = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
// 사전순 만족은 어떻게 처리하누..

//cost에 해당하는 배열값들을 넣어 정렬하자

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

// pop연산의 시간복잡도를 줄이기 위해 큐 구현
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(item) {
    const node = new Node(item);
    if (this.head === null) this.head = node;
    else this.tail.next = node;
    this.tail = node;
    this.length++;
  }
  pop() {
    const popItem = this.head;
    this.head = this.head.next;
    this.length--;
    return popItem.item;
  }
}
const INPUT = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 1. 물로된 곳을 dfs => 벽을 지운다.
// 2. 백조 dfs한번 돌림.
// 3. 반복
// 처음 접근 법을 생각했을때 시간복잡도가 거의 10억가까이 났음.. => 다른 해결법을 생각해야됨.
//
// 15분 고민후 해답 봄 => 가장자리만 변하기 때문에 반복부턴 가장자리만 돌리자!
// 그래서 que에 시작점을 하나만 담는다는 개념을 벗어던지고 시작점을 여러개로 담아낸다!

const [r, c] = INPUT.shift().split(" ").map(Number);
const mp = [];
for (let i = 0; i < r; i++) {
  mp.push([...INPUT[i]]);
}
const visit_water = Array.from(Array(r), () => Array(c).fill(0));
const visit_swan = Array.from(Array(r), () => Array(c).fill(0));

let swanque = new Queue();
const waterque = new Queue();

let cnt = 0;
let swansize = 0;
let watersize = 0;

// bfs로 구현 왜인지 모르겠는데 dfs로 구현하면 maxsize에러남
function swanmove() {
  swantempque = new Queue();
  while (swanque.length > 0) {
    const [y, x] = swanque.pop();
    for (let i = 0; i < 4; i++) {
      const ny = y + diff[i][0];
      const nx = x + diff[i][1];
      if (ny < 0 || ny >= r || nx < 0 || nx >= c || visit_swan[ny][nx])
        continue;
      if (mp[ny][nx] === "L") return cnt;
      visit_swan[ny][nx] = 1;
      if (mp[ny][nx] === "X") {
        swantempque.push([ny, nx]);
      } else if (mp[ny][nx] === "." || mp[ny][nx] === "L") {
        swanque.push([ny, nx]);
      }
    }
  }
  swanque = swantempque;
  return 0;
}

function watermove(y, x) {
  for (let i = 0; i < 4; i++) {
    const ny = y + diff[i][0];
    const nx = x + diff[i][1];
    if (ny < 0 || ny >= r || nx < 0 || nx >= c || visit_water[ny][nx]) continue;
    visit_water[ny][nx] = 1;
    if (mp[ny][nx] === "X") {
      waterque.push([ny, nx]);
      mp[ny][nx] = ".";
    }
  }
}

function main() {
  let check = false;

  for (let y = 0; y < r; y++) {
    for (let x = 0; x < c; x++) {
      if (mp[y][x] === ".") {
        visit_water[y][x] = 1;
        waterque.push([y, x]);
      } else if (mp[y][x] === "L") {
        if (check === false) {
          mp[y][x] = ".";
          visit_swan[y][x] = 1;
          swanque.push([y, x]);
        }
        visit_water[y][x] = 1;
        waterque.push([y, x]);
        check = true;
      }
    }
  }

  cnt = 0;

  while (1) {
    if (swanmove()) return cnt;
    cnt++;
    watersize = waterque.length;

    while (watersize--) {
      const [y, x] = waterque.pop();
      watermove(y, x);
    }
  }
}
console.log(main());
