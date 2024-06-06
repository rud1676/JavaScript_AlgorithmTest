const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");


function solution() {
  let [n, k] = input.shift().split(" ").map(Number);
  const dp = Array(100001).fill(0);
  while(n--){
    let [w,v] = input.shift().split(" ").map(Number);
    for(let i=k;i>=w;i--){
      dp[i] = Math.max(dp[i],dp[i-w]+v);
    }
  }
  console.log(dp[k]);

}

solution();
// 1. DP => 오른쪽에서 탐색한다 하면
// 2. 담을 수있는 용량을 최대 K라고 하고 각 구간 K ~ 1 까지 DP한다는 의미로 생각해보자
// 3. 그러면 input으로 들어온 w는 K~W까진 v가 보장된다. v로 갱신
// 4. 이후에 받은 w는 K가치를 담을 수 있다 햇을 때 비교해보는 것임. => 현재 K만큼의 용량이 가치가 크냐 vs K-W의 가치에서 + v한 가치가 크냐 (새롭게 갱신할 게 더 크냐) 비교후 갱신.