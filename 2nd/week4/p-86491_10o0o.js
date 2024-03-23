function solution(sizes) {
  sizes.map((el) => el.sort((a, b) => a - b));

  let max = 0; let min = 0;

  for (const [s, b] of sizes) {
    max = Math.max(max, b);
    min = Math.max(min, s);
  }

  return max * min;
}
