function solution(progresses, speeds) {
  const converted = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
  const result = [];
  
  let cur = -1;
  let count = 0;
  
  for (const el of converted) {
      if (el > cur) {
          result.push(count);
          count = 1;
          cur = el;
      } else {
          count += 1
      }
  }
  
  if (count) result.push(count);
  
  return result.slice(1);
}