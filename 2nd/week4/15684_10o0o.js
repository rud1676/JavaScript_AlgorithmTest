/* eslint-disable no-shadow */
const fs = require('fs');

const inputs = fs.readFileSync(process.env.LOGNAME === 'jake' ? './input.txt' : '/dev/stdin')
  .toString().trim().split('\n');

const [n, m, h] = inputs[0].split(' ').map(Number);
const rows = inputs.slice(1).map((el) => el.split(' ').map(Number));
const rowMemo = new Array(h).fill().map(() => new Array(n - 1).fill(0));
const max = 3;
let isPossible = 0;

for (const [hi, ci] of rows) {
  rowMemo[hi - 1][ci - 1] = 1;
}

const find = (index, hIndex) => {
  if (hIndex === h) return index;

  for (let i = hIndex; i < h; i += 1) {
    if (rowMemo[i][index]) {
      return find(index + 1, i + 1);
    }

    if (index && rowMemo[i][index - 1]) {
      return find(index - 1, i + 1);
    }
  }

  return index;
};

const check = () => {
  for (let i = 0; i < n; i += 1) {
    if (i !== find(i, 0)) return false;
  }

  return true;
};

const dfs = (addedCounts, totalCounts, hIndex) => {
  if (addedCounts === totalCounts) {
    if (check()) {
      isPossible = 1;
    }
    return;
  }

  for (let j = hIndex; j < h; j += 1) {
    for (let i = 0; i < n - 1; i += 1) {
      if (
        !rowMemo[j][i]
        && (i === n - 2 || !rowMemo[j][i + 1])
        && (i === 0 || !rowMemo[j][i - 1])
      ) {
        rowMemo[j][i] = 1;
        dfs(addedCounts + 1, totalCounts, j);
        rowMemo[j][i] = 0;
      }
    }
  }
};

let result = -1;

for (let i = 0; i <= max; i += 1) {
  dfs(0, i, 0);

  if (isPossible) {
    result = i;
    break;
  }
}

console.log(result);
