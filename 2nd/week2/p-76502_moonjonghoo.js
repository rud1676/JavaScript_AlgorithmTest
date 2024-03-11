function checkCorrect(s) {
  let open = { "(": ")", "[": "]", "{": "}" };
  let stack = [];
  for (char of s) {
    if (char in open) {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false; // 스택에 열린 괄호가 없는데 닫힌 괄호가 나온 경우
      }
      let lastOpenBracket = stack.pop(); // 스택에서 가장 최근에 추가된 열린 괄호를 꺼냄
      if (open[lastOpenBracket] !== char) {
        return false; // 스택에서 꺼낸 열린 괄호와 닫힌 괄호가 매칭되지 않는 경우
      }
    }
  }
  return stack.length === 0; // 모든 괄호가 올바르게 매칭되었는지 확인
}

function rotateString(str, rotateLength) {
  if (str.length === 0 || rotateLength === 0) {
    return str;
  }

  // 음수 값이 들어올 경우 양수로 변경
  rotateLength = rotateLength % str.length;
  if (rotateLength < 0) {
    rotateLength += str.length;
  }

  return str.slice(rotateLength) + str.slice(0, rotateLength);
}

function solution(s) {
  let n = s.length;
  let answer = 0;
  for (let i = 0; i < n; i++) {
    let rotate = rotateString(s, i);
    if (checkCorrect(rotate)) {
      answer++;
    }
  }
  return answer;
}

console.log(solution("[](){}"));
