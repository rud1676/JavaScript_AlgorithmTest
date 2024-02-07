function solution(arr) {
  let answer = [];
  for (let a of arr) {
    if (answer[answer.length - 1] === a) {
      answer.pop();
      answer.push(a);
    } else answer.push(a);
  }

  return answer;
}
