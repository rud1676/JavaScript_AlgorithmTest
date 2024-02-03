// 큐 구현
class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  // 큐 삽입
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  // 큐 제거
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  // 큐 앞단 확인
  peek() {
    return this.items[this.headIndex];
  }
  // 큐 길이 확인
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const MAX_SIZE = 100001;
let [n, k] = input[0].split(" ").map(Number); // 수빈 N, 동생 K
let visited = new Array(MAX_SIZE).fill(0); // 방문 표시 배열

function bfs() {
  queue = new Queue(); // 큐 생성
  queue.enqueue(n); // 수빈의 위치 큐에 넣기
  // 큐가 빌 때까지 반복
  while (queue.getLength() != 0) {
    let cur = queue.dequeue(); // 수빈 위치 반환
    if (cur == k) return visited[cur]; // 수빈이가 동생 위치까지 도달한 경우 이동시간 출력
    for (let nxt of [cur + 1, cur - 1, cur * 2]) {
      if (nxt < 0 || nxt >= MAX_SIZE) continue; // 범위를 벗어난 경우
      // 방문하지 않은 경우 수행
      if (visited[nxt] == 0) {
        queue.enqueue(nxt);
        visited[nxt] = visited[cur] + 1; // 시간 더하기
      }
    }
  }
}

console.log(bfs());
