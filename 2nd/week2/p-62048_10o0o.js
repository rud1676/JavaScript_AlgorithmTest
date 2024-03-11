function solution(w, h) {
  const getGcd = (a, b) => {
      while (b) {
          const tmp = a % b;
          [a, b] = [b, tmp];
      }
      
      return a;
  }
  
  const gcd = getGcd(Math.max(w, h), Math.min(w, h));
  const [uw, uh] = [w / gcd, h / gcd];
  const minus = uw + uh - 1;
  const repeat = w / uw;
  
  return w * h - minus * repeat;
}