function solution(s) {
  var answer = 0;
  // 1000 * 1000
  // 괄호 검사는 stack으로
  const arr = s.split("");
  for (let i = 0; i < s.length; i++) {
    //case select
    const ch = arr.shift();
    arr.push(ch);
    const st = [];
    let check = true;

    //checking
    for (let c of arr) {
      if (c === "{" || c === "[" || c === "(") st.push(c);
      else {
        const a = st.pop();
        if (a === "{" && c === "}") continue;
        if (a === "(" && c === ")") continue;
        if (a === "[" && c === "]") continue;
        check = false;
        break;
      }
    }
    if (check && st.length === 0) answer++;
  }

  return answer;
}
