/* eslint-disable no-param-reassign */
function solution(board, table) {
  const n = board.length;
  const moves = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const pieces = new Map();
  let result = 0;

  const isValidPos = (x, y) => x >= 0 && y >= 0 && x < n && y < n;

  const bfs = (matrix, target, x, y, visited) => {
    visited[x][y] = 1;
    const diffs = ['0 0'];
    const posAcc = [[x, y]];
    let poses = [[x, y, 0, 0]];

    while (poses.length) {
      const newPoses = [];

      for (const [px, py, cx, cy] of poses) {
        for (const [dx, dy] of moves) {
          const [mx, my] = [px + dx, py + dy];

          if (isValidPos(mx, my) && matrix[mx][my] === target && !visited[mx][my]) {
            visited[mx][my] = 1;
            const cx2 = cx + dx;
            const cy2 = cy + dy;

            newPoses.push([mx, my, cx2, cy2]);
            diffs.push(`${cx2} ${cy2}`);
            posAcc.push([mx, my]);
          }
        }
      }

      poses = newPoses;
    }

    return [diffs.join(','), posAcc];
  };

  const tableVisited = new Array(n).fill().map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (!tableVisited[i][j] && table[i][j]) {
        const key = bfs(table, 1, i, j, tableVisited)[0];
        const exist = pieces.get(key);

        if (exist) {
          pieces.set(key, exist + 1);
        } else {
          pieces.set(key, 1);
        }
      }
    }
  }

  const rotate = (matrix) => {
    const newMatrix = new Array(n).fill().map(() => new Array(n));

    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < n; j += 1) {
        newMatrix[i][j] = matrix[j][n - 1 - i];
      }
    }

    return newMatrix;
  };

  const searchBoard = () => {
    const boardVisited = new Array(n).fill().map(() => new Array(n).fill(0));

    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < n; j += 1) {
        if (!boardVisited[i][j] && !board[i][j]) {
          const [diffs, posAcc] = bfs(board, 0, i, j, boardVisited);
          const exist = pieces.get(diffs);

          if (exist) {
            for (const [x, y] of posAcc) {
              board[x][y] = 1;
              result += 1;
            }

            if (exist === 1) {
              pieces.delete(diffs);
            } else {
              pieces.set(diffs, exist - 1);
            }
          }
        }
      }
    }
  };

  for (let i = 0; i < 4; i += 1) {
    searchBoard();
    board = rotate(board);
  }

  return result;
}