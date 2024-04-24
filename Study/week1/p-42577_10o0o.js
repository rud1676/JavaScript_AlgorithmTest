function solution(pb) {
  pb.sort((a, b) => a.length - b.length);
  
  const memo = new Array(20).fill(new Set());
  
  for (const phone of pb) {
      const { length } = phone;
      
      for (let i = 0; i < length; i += 1) {
          const targetMemo = memo[i];
          const sliced = phone.slice(0, i + 1);
          
          if (targetMemo.has(sliced)) return false;
      }
      
      memo[length - 1].add(phone);
  }
  
  return true;
}