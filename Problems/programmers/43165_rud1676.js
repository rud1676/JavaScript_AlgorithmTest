function solution(numbers, target) {
  //경우의 수는 2의 20제곱
  var answer = 0;
  answer = dfs(0, numbers, target, 0);
  return answer;
}

function dfs(n, numbers, target, depth) {
  if (depth === numbers.length) {
    if (n === target) return 1;
    else return 0;
  }
  let ret = 0;
  ret += dfs(n + numbers[depth], numbers, target, depth + 1);
  ret += dfs(n - numbers[depth], numbers, target, depth + 1);
  return ret;
}
