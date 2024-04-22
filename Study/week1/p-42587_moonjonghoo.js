function solution(priorities, location) {
  let answer = 0;
  let test = [];
  while (priorities.length > 0) {
    const current = priorities.shift();
    if (priorities.some((priority) => priority > current)) {
      priorities.push(current);
      if (location > 0) {
        location--;
      }
    } else {
      test.push(current);
    }
  }
  return location + 1;
}
