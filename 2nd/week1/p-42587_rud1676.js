function solution(priorities, location) {
  var answer = 0;
  // 아무리 많아도 100*100*100
  while (true) {
    answer++;
    const max = Math.max(...priorities);
    const idx = priorities.indexOf(max);
    if (idx === location) break;
    for (let i = -1; i < idx; i++) {
      //회전
      const n = priorities.shift();
      priorities.push(n);
      location -= 1;
      if (location < 0) location = priorities.length - 1;
    }
    priorities.pop();
  }
  return answer;
}
