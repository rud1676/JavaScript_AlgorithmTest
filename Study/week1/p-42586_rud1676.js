function solution(progresses, speeds) {
  var answer = [];
  let comp = [];
  for (let i = 0; i < speeds.length; i++) {
    comp.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  let max = -1;
  let sum = 0;
  console.log(comp);
  for (let day of comp) {
    if (max == -1) {
      sum = 1;
      max = day;
      continue;
    }
    if (max >= day) {
      sum++;
    } else {
      answer.push(sum);
      sum = 1;
      max = day;
    }
  }
  answer.push(sum);
  return answer;
}
