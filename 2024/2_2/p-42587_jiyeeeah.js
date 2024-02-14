function solution(priorities, location) {
  var answer = 0;
  var array = Array.from({ length: priorities.length }, (v, i) => i);
  var process = [];
  var max = Math.max(...priorities);

  while (priorities.length != 0) {
    max = Math.max(...priorities);
    if (priorities[0] < max) {
      priorities.push(priorities.shift());
      array.push(array.shift());
    } else {
      priorities.shift();
      process.push(array.shift());
    }
  }
  answer = process.indexOf(location) + 1;
  return answer;
}
