function solution(board, skill) {
  const n = board.length;
  const m = board[0].length;
  const acc = new Array(n).fill().map(() => new Array(m).fill(0));

  for (const [type, r1, c1, r2, c2, degree] of skill) {
    const prefix = type === 1 ? -1 : 1;
    const v = degree * prefix;

    acc[r1][c1] += v;

    if (r2 + 1 < n) {
      acc[r2 + 1][c1] -= v;
    }

    if (c2 + 1 < m) {
      acc[r1][c2 + 1] -= v;
    }

    if (r2 + 1 < n && c2 + 1 < m) {
      acc[r2 + 1][c2 + 1] += v;
    }
  }

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m - 1; j += 1) {
      acc[i][j + 1] += acc[i][j];
    }
  }

  for (let i = 0; i < n - 1; i += 1) {
    for (let j = 0; j < m; j += 1) {
      acc[i + 1][j] += acc[i][j];
    }
  }

  let result = 0;

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      if (board[i][j] + acc[i][j] > 0) {
        result += 1;
      }
    }
  }

  return result;
}