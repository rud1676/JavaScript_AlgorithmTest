function solution(s) {
  let answer = true;
  let stack = [];
  for (x of s) {
    if (x === "(") stack.push(x);
    else if (x === ")") {
      if (stack.length > 0) {
        stack.pop();
      } else answer = false;
    }
  }
  if (stack.length > 0) answer = false;
  return answer;
}
