const [START, END] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map((e) => Number(e));

const MAX = 100001;

/**
 * use BFS
 * @param {number} start
 * @param {number} end
 * @returns {number}
 */
function solution(start, end) {
  const path = new Array(MAX).fill(0);
  const queue = [];

  queue.push(start);

  while (queue.length) {
    const curr = queue.shift();
    if (curr === end) return path[curr];

    for (const i of [curr - 1, curr + 1, curr * 2]) {
      if (i >= 0 && i < MAX && !path[i]) {
        path[i] = path[curr] + 1;
        queue.push(i);
      }
    }
  }

  return path[end];
}

console.log(solution(START, END));
