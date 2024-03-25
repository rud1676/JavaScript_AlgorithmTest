function solution(brown, yellow) {
  let sum = brown + yellow;
  let divisor = [];
  let answer = [];
  let index = 1;
  while (index <= sum) {
    if (sum % index == 0) {
      divisor.push(index);
    }
    index++;
  }
  for (let i = 0; i < divisor.length; i++) {
    for (let j = 0; j < divisor.length; j++) {
      if (divisor[i] * divisor[j] === sum && divisor[i] >= divisor[j]) {
        answer.push([divisor[i], divisor[j]]);
      }
    }
  }

  for (let i = 0; i < answer.length; i++) {
    let a = answer[i][0];
    let b = answer[i][1];
    let count = 0;

    for (let j = 0; j < a; j++) {
      for (let k = 0; k < b; k++) {
        if (k === 0 || j === 0 || k === b - 1 || j === a - 1) {
          count++;
        }
      }
    }
    if (count === brown) {
      return [a, b];
    }
  }
}
