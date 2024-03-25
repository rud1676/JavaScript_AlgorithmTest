function solution(brown, yellow) {
  const sum = (brown - 4) / 2;
  const multiply = yellow;

  const p1 = (sum + Math.sqrt(sum ** 2 - 4 * multiply)) / 2;
  const p2 = (sum - Math.sqrt(sum ** 2 - 4 * multiply)) / 2;

  return [p1 + 2, p2 + 2];
}
