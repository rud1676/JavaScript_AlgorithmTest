const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const prices = input[1].split(' ').map(Number);

let minPrice = prices[0]; // 첫 날의 가격을 최소 가격으로 설정
let maxProfit = 0; // 최대 이익
let maxPrice = 0;

for (let i = 1; i < n; i++) {
  if (prices[i] < minPrice) {
    // 현재 가격이 최소 가격보다 작으면 최소 가격 갱신
    minPrice = prices[i];
  } else if (prices[i] - minPrice > maxProfit) {
    // 현재 가격과 최소 가격의 차이가 최대 이익보다 크면 최대 이익 갱신
    maxProfit = prices[i] - minPrice;
  }
}

console.log(maxProfit);