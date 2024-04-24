function solution(s) {
  let stack = [];
  if (s[0] === ")") return false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else stack.pop();
  }
  if (stack.length === 0) return true;
  else return false;
}
