const fs = require("fs");
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").
toString().
split("\n");

//주차요금 A, B, C
const [A, B, C] = input[0].split(" ").map(Number);
//주차요금이 각각 A, B, C인 주차장에 주차된 트럭의 도착시간과 출발시간
const trucks = input.slice(1, 4).map(x => x.split(" ").map(Number));

// 각 시간대별로 주차된 트럭의 대수를 저장하는 배열입니다.
const parked = Array(101).fill(0); //1부터 100까지 각 시간대별로 주차된 트럭의 대수를 저장하는 배열입니다.
for (let [arrive, leave] of trucks) { // 각 트럭에 대하여
  for (let i = arrive; i < leave; i++) { // 트럭이 주차장에 있던 시간 동안
    parked[i]++; // 해당 시간에 주차된 트럭의 대수를 1 증가시킵니다.
  }
}

let cost = 0; // 총 요금을 저장할 변수를 초기화합니다.
for (let i = 1; i <= 100; i++) { // 각 시간대별로
  if (parked[i] === 1) { // 주차된 트럭이 한 대이면
    cost += A; // 요금 A를 더합니다.
  } else if (parked[i] === 2) { // 주차된 트럭이 두 대이면
    cost += B * 2; // 요금 B를 두 번 더합니다.
  } else if (parked[i] === 3) { // 주차된 트럭이 세 대이면
    cost += C * 3; // 요금 C를 세 번 더합니다.
  }
}

console.log(cost); // 총 요금을 출력합니다.