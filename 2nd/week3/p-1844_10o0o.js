function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const moves = [[1, 0], [-1, 0], [0, -1], [0, 1]];
  const visited = new Array(n).fill().map(() => new Array(m).fill(0));

  visited[0][0] = 1;
  let poses = [[0, 0]];
  let moveCounts = 1;
  let flag = 0;

  const isValidPos = (x, y) => x >= 0 && x < n && y >= 0 && y < m;

  while (1) {
    const newPoses = [];

    for (const [x, y] of poses) {
      if (x === n - 1 && y === m - 1) {
        flag = 1;
        break;
      }

      for (const [dx, dy] of moves) {
        const [mx, my] = [x + dx, y + dy];

        if (isValidPos(mx, my) && !visited[mx][my] && maps[mx][my] === 1) {
          visited[mx][my] = 1;
          newPoses.push([mx, my]);
        }
      }
    }

    if (flag || !newPoses.length) break;

    poses = newPoses;
    moveCounts += 1;
  }

  return flag ? moveCounts : -1;
}

const test = solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 0], [0, 0, 0, 0, 1]]);

console.log('test: ', test);
