function solution(rectangle, characterX, characterY, itemX, itemY) {
  const n = 102;
  const map = new Array(n).fill().map(() => new Array(n).fill(null));
  const visited = new Array(n).fill().map(() => new Array(n).fill(0));

  for (let [x1, y1, x2, y2] of rectangle) {
    x1 *= 2;
    y1 *= 2;
    x2 *= 2;
    y2 *= 2;

    for (let i = x1; i <= x2; i += 1) {
      if (map[i][y1] === null) {
        map[i][y1] = 1;
      }

      if (map[i][y2] === null) {
        map[i][y2] = 1;
      }
    }

    for (let i = y1; i <= y2; i += 1) {
      if (map[x1][i] === null) {
        map[x1][i] = 1;
      }

      if (map[x2][i] === null) {
        map[x2][i] = 1;
      }
    }

    for (let i = x1 + 1; i < x2; i += 1) {
      for (let j = y1 + 1; j < y2; j += 1) {
        map[i][j] = 0;
      }
    }
  }

  let poses = [[characterX * 2, characterY * 2]];
  visited[characterX * 2][characterY * 2] = 1;
  let counts = 0;
  const moves = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  const isValidPos = (x, y) => x < n && x >= 0 && y < n && y >= 0;

  while (1) {
    const newPoses = [];

    for (const [x, y] of poses) {
      if (x === itemX * 2 && y === itemY * 2) {
        return counts / 2;
      }

      for (const [dx, dy] of moves) {
        const [mx, my] = [x + dx, y + dy];

        if (isValidPos(mx, my) && map[mx][my] && !visited[mx][my]) {
          visited[mx][my] = 1;
          newPoses.push([mx, my]);
        }
      }
    }

    counts += 1;

    poses = newPoses;
  }
}