function solution(food_times, k) {
  var answer = 0;
  let n = food_times.length;
  for (let i = 0; i < k; i++) {
    if (food_times[i % n] === 0) {
      console.log("다먹음!");
    }
    food_times[i % n] -= 1;
  }
  console.log(food_times);
  return answer;
}

console.log(solution([3, 1, 2], 5));
