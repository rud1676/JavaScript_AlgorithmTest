function solution(n, lost, reserve) {
  var answer = 0;
  let student = Array.from({ length: n + 1 }, () => 1);
  student[0] = 0;

  for (let i = 0; i < lost.length; i++) {
    student[lost[i]] = student[lost[i]] - 1;
  }

  for (let i = 0; i < reserve.length; i++) {
    student[reserve[i]] = student[reserve[i]] + 1;
  }

  for (let i = 1; i < student.length; i++) {
    if (student[i] === 0) {
      if (student[i - 1] === 2) {
        student[i] = 1;
        student[i - 1] = 1;
      } else if (student[i + 1] === 2) {
        student[i] = 1;
        student[i + 1] = 1;
      }
    }
  }

  for (let i = 1; i < student.length; i++) {
    if (student[i] >= 1) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(5, [1, 2, 3, 4, 5], [1]));
