function solution(arr) {
  let max = 0;
  let min = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i].sort((a, b) => a - b);
    if (arr[i][0] > min) {
      min = arr[i][0];
    }
    if (arr[i][1] > max) {
      max = arr[i][1];
    }
  }
  return max * min;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
