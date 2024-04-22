/* eslint-disable no-shadow */
const fs = require('fs');

const inputs = fs.readFileSync(process.env.LOGNAME === 'jake' ? './input.txt' : '/dev/stdin')
  .toString().trim().split('\n');

const [r, c] = inputs[0].split(' ').map(Number);
const matrix = inputs.slice(1).map((el) => el.split(''));
const jPos = [0, 0];
let fPoses = [];

for (let i = 0; i < r; i += 1) {
  for (let j = 0; j < r; j += 1) {
    if (matrix[i][j] === 'J') {
      jPos[0] = i;
      jPos[1] = j;
    }

    if (matrix[i][j] === 'F') {
      fPoses.push([i, j]);
    }
  }
}

const moves = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const isValidPos = (x, y) => x >= 0 && x < r && y >= 0 && y < c;

const bfs = () => {
  const jVisited = new Array(r).fill().map(() => new Array(c).fill(0));
  jVisited[jPos[0]][jPos[1]] = 1;

  let jPoses = [jPos];
  let time = 1;
  let isPossible = 0;

  const checkJ = () => {
    for (const [x, y] of jPoses) {
      if ([0, r - 1].includes(x) || [0, c - 1].includes(y)) {
        return true;
      }
    }

    return false;
  };

  while (jPoses.length) {
    const newJPoses = [];
    const newFPoses = [];

    if (checkJ()) {
      isPossible = 1;
      break;
    }

    for (const [fx, fy] of fPoses) {
      for (const [dx, dy] of moves) {
        const [mx, my] = [fx + dx, fy + dy];

        if (isValidPos(mx, my) && matrix[mx][my] === '.') {
          matrix[mx][my] = 'F';
          newFPoses.push([mx, my]);
        }
      }
    }

    for (const [jx, jy] of jPoses) {
      for (const [dx, dy] of moves) {
        const [mx, my] = [jx + dx, jy + dy];

        if (isValidPos(mx, my) && !jVisited[mx][my] && matrix[mx][my] === '.') {
          jVisited[mx][my] = 1;
          newJPoses.push([mx, my]);
        }
      }
    }

    jPoses = newJPoses;
    fPoses = newFPoses;
    time += 1;
  }

  return isPossible ? time : 'IMPOSSIBLE';
};

console.log(bfs());
