function solution(numbers) {
  const c = (x) => {
    if (!(x & 1)) return x + 1;
    let bx = BigInt(x);

    for (let i = 1n; ; i += 1n) {
      const b = 1n << i;
      if ((bx & b) !== b) {
        bx = bx + b - (b >> 1n);
        break;
      }
    }

    return Number(bx);
  };

  return numbers.map(c);
}
