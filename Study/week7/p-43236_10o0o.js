function solution(distance, rocks, n) {
  let result = 0;

  rocks.push(distance);
  rocks.sort((a, b) => a - b);

  let left = 1;
  let right = distance;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    let counts = 0;
    let pos = 0;

    for (const rock of rocks) {
      if (rock - pos < mid) {
        counts += 1;

        if (counts > n) break;
      } else {
        pos = rock;
      }
    }

    if (counts > n) {
      right = mid - 1;
    } else {
      result = mid;
      left = mid + 1;
    }
  }

  return result;
}