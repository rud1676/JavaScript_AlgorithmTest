function solution(lines) {
  const comp = new Set();
  const p = [];
  const np = [];
  
  for (const line of lines) {
      const [_, hms, sp] = line.split(' ');
      const [h, m, s] = hms.split(':').map(Number);
      const time = (h * 3600 + m * 60 + s) * 1000;
      const nsp = +((sp.slice(0, sp.length - 1)) * 1000);
      comp.add(time + 1000);
      np.push(time + 1000);
      comp.add(time - nsp + 1);
      p.push(time - nsp + 1);
  }
  
  const compA = [...comp].sort((a, b) => a - b);
  const indexMap = new Map();
  
  for (let i = 0; i < compA.length; i += 1) {
      indexMap.set(compA[i], i);
  }
  
  const a = new Array(compA.length).fill(0);
  
  for (const el of p) {
      const index = indexMap.get(el);
      a[index] += 1;
  }
  
  for (const el of np) {
      const index = indexMap.get(el);
      a[index] -= 1;
  }
  
  for (let i = 1; i < a.length; i += 1) {
      a[i] += a[i - 1];
  }
  
  return Math.max(...a);
}