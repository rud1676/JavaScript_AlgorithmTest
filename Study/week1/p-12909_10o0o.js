function solution (s) {
  let opens = 0;
  
  for (let i = 0; i < s.length; i += 1) {
      const str = s[i];
      
      if (str === '(') opens += 1;
      else opens -= 1;
      
      if (opens < 0) return false;
  }
  
  return !opens;
}