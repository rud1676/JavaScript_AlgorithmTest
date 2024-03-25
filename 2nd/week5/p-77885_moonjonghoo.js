function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    let result = checkType(numbers[i]);
    answer.push(Number(result));
  }
  return answer;
}

function checkType(n) {
  let number = n;
  let flag = false;
  let answer;
  while (!flag) {
    number++;
    let origin = n.toString(2);
    let x = number.toString(2);
    if (origin.length !== x.length) {
      let gap = x.length - origin.length;
      origin = "0".repeat(gap) + origin;
    }
    let count = 0;
    for (let i = 0; i < x.length; i++) {
      if (x[i] !== origin[i]) count++;
    }
    if (count <= 2) {
      flag = true;
      answer = x;
    }
  }
  return parseInt(answer, 2).toString(10);
}

//시간초과 테스트 10~11
