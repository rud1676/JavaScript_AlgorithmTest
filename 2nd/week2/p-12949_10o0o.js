function solution(arr1, arr2) {
  const n = arr1.length;
  const m = arr2[0].length;
  const l = arr1[0].length;

  const result = new Array(n).fill().map(() => new Array(m).fill(0));

  for (let i = 0; i < n; i += 1) {
    const row = arr1[i];

    for (let j = 0; j < m; j += 1) {
      for (let k = 0; k < l; k += 1) {
        result[i][j] += row[k] * arr2[k][j];
      }
    }
  }

  return result;
}
