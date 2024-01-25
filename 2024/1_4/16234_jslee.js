const [N, L, R, ...arr] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(/\s/)
  .map((e) => Number(e));

const DIRECTIONS = [
  [1, 0],
  [-1, 0],
  [0, -1],
  [0, 1],
];

const countries = Array.from({ length: N }, (_, i) =>
  Array.from({ length: N }, (_, j) => arr[i * N + j]),
);

/**
 * use BFS
 * 전체적으로 변수 사용이 더럽다...
 * @param {number} row
 * @param {number} col
 * @param {number[][]} maps
 */
function visit(row, col, maps) {
  maps[row][col] = 1; // now visited

  const queue = [];
  queue.push([row, col]);

  const union = [];
  union.push([row, col]);

  while (queue.length) {
    const [i, j] = queue.shift();

    for (const [dr, dc] of DIRECTIONS) {
      const nextRow = i + dr;
      const nextCol = j + dc;

      if (nextRow < 0 || nextRow >= N) continue;
      if (nextCol < 0 || nextCol >= N) continue;
      if (maps[nextRow][nextCol]) continue;

      const difference = Math.abs(
        countries[nextRow][nextCol] - countries[i][j],
      );

      if (difference < L || difference > R) continue;

      queue.push([nextRow, nextCol]);
      maps[nextRow][nextCol] = 1;
      union.push([nextRow, nextCol]);
    }
  }

  return union;
}

/**
 * @returns {number[][][]} unions
 */
function openBorders() {
  const maps = Array.from({ length: N }, () => new Array(N).fill(0));
  const unions = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!maps[i][j]) {
        // not visited
        const union = visit(i, j, maps);
        unions.push(union);
      }
    }
  }

  return unions;
}

/**
 * @returns {number}
 */
function solution() {
  let days = 0;

  while (1) {
    const unions = openBorders();
    const isAvailableUnion = unions.some((u) => u.length > 1);

    if (!isAvailableUnion) break;

    // if unions exist
    for (const union of unions) {
      const population = Math.floor(
        union.reduce((a, [i, j]) => countries[i][j] + a, 0) / union.length,
      );

      for (const [i, j] of union) {
        countries[i][j] = population;
      }
    }

    days++;
  }

  return days;
}

console.log(solution(countries, L, R));
