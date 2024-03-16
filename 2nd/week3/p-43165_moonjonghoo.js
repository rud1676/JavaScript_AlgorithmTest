function solution(numbers, target) {
  let n = numbers.length;
  let check = Array.from({ length: n }, () => false);
  let answer = 0;
  function DFS(v) {
    if (v === n) {
      let sum = 0;
      for (let i = 0; i < n; i++) {
        if (check[i] === true) {
          sum += numbers[i];
        } else if (check[i] === false) {
          sum -= numbers[i];
        }
      }
      if (sum === target) answer++;
    } else {
      check[v] = true;
      DFS(v + 1);
      check[v] = false;
      DFS(v + 1);
    }
  }
  DFS(0);
  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));

//다른풀이
function solution(numbers, target) {
  let answer = 0;
  getAnswer(0, 0);
  function getAnswer(x, value) {
    if (x < numbers.length) {
      getAnswer(x + 1, value + numbers[x]);
      getAnswer(x + 1, value - numbers[x]);
    } else {
      if (value === target) {
        answer++;
      }
    }
  }
  return answer;
}
