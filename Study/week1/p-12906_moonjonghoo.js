function solution(arr) {
  let stack = [];
  let flag = null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== flag) {
      stack.push(arr[i]);
      flag = arr[i];
    }
  }
  return stack;
}
console.log(solution([1, 1, 3, 3, 0, 1, 1]));
