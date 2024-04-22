function solution(arr) {
  const result = [];
  
  for (const el of arr) {
      if (result[result.length - 1] !== el) result.push(el);
  }
  
  return result;
}