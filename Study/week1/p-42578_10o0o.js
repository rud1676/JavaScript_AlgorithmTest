function solution(clothes) {
  const memo = new Map();
  
  for (const cloth of clothes) {
      const [name, type] = cloth;
      
      if (memo.has(type)) {
          memo.set(type, [...memo.get(type), name]);
      } else {
          memo.set(type, [name]);
      }
  }
  
  return Array.from(memo.values()).reduce((acc, cur) => {
      return acc * (cur.length + 1);
  }, 1) - 1;
}