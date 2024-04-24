function solution(s) {
  var answer = true;
  const st = [];
  for (let ch of s) {
    if (ch === "(") st.push("(");
    else if (st.length !== 0 && ch === ")") st.pop();
    else {
      answer = false;
      break;
    }
  }
  if (st.length > 0) answer = false;
  return answer;
}
