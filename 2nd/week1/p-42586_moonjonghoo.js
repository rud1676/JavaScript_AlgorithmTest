function solution(progresses, speeds) {
  let arr = [];
  for (let i = 0; i < progresses.length; i++) {
    let perday = Math.ceil((100 - progresses[i]) / speeds[i]);
    arr.push(perday);
  }
  let flag = arr[0];
  let answer = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] > flag && arr[i + 1] !== undefined) {
      count++;
      answer.push(count);
      flag = arr[i + 1];
      count = 0;
    } else if (i === arr.length - 1) {
      count++;
      answer.push(count);
    } else count++;
  }

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
