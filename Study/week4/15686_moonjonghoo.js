function combination(arr, n, r) {
  if (r === 0) {
    return [[]];
  }

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const fixed = arr[i];
    const rest = arr.slice(i + 1);
    const combinations = combination(rest, n - 1, r - 1);
    for (const combination of combinations) {
      result.push([fixed, ...combination]);
    }
  }

  return result;
}

function solution(n, m, arr) {
  let home = [];
  let chickenhome = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 1) {
        home.push([i, j]);
      }
      if (arr[i][j] === 2) {
        chickenhome.push([i, j]);
      }
    }
  }
  let chickenhomes = combination(chickenhome, chickenhome.length, m);
  let results = [];

  for (let i = 0; i < chickenhomes.length; i++) {
    let distances = [];
    for ([a, b] of home) {
      let min = Number.MAX_SAFE_INTEGER;
      for (let [c, d] of chickenhomes[i]) {
        let distance = Math.abs(a - c) + Math.abs(b - d);
        min = Math.min(min, distance);
      }
      distances.push(min);
    }

    let result = distances.reduce((a, b) => a + b, 0);
    results.push(result);
  }
  return Math.min(...results);
}

const array = [
  [1, 2, 0, 0, 0],
  [1, 2, 0, 0, 0],
  [1, 2, 0, 0, 0],
  [1, 2, 0, 0, 0],
  [1, 2, 0, 0, 0],
];
console.log(solution(5, 1, array));
