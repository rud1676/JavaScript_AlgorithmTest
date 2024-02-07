function solution(progresses, speeds) {
  let answer = [];
  let timeLeft = progresses.map((progresses, idx) => Math.ceil((100 - progresses) / speeds[idx]));
  let maxDay = timeLeft[0];
  let count = 1;

  for (let i = 1; i < timeLeft.length; i++) {
    if (timeLeft[i] <= maxDay) {
      count++;
    } else {
      maxDay = timeLeft[i];
      answer.push(count);
      count = 1;
    }
  }
  answer.push(count);
  return answer;
}
