function dfs(idx, numbers, target) {
  if (idx == numbers.length - 1) {
    return numbers.reduce((acc, v) => acc + v, 0) === target;
  }

  let ret = 0;
  ret += dfs(idx + 1, Array.of(...numbers), target);
  if (numbers[idx + 1]) numbers[idx + 1] = -1 * numbers[idx + 1];
  ret += dfs(idx + 1, Array.of(...numbers), target);
  return ret;
}
function solution(numbers, target) {
  //경우의 수는 2의 20제곱
  let answer = 0;
  answer += dfs(0, Array.of(...numbers), target);
  numbers[0] = -1 * numbers[0];
  answer += dfs(0, Array.of(...numbers), target);
  return answer;
}
