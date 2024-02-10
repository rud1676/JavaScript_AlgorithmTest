function solution(brown, yellow) {
  let col = 0;
  let row = 0;
  for (let i = 1; i <= Math.floor(yellow / 2) + 1; i++) {
    if (yellow % i !== 0) continue;
    col = i + 2;
    row = Math.floor(yellow / i) + 2;
    if (col * row === brown + yellow) break;
  }
  return [row, col];
}
