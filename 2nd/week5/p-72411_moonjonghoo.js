function solution(orders, course) {
  const answer = [];
  for (let i = 0; i < course.length; i++) {
    const map = {};
    let max = 0;
    orders.forEach((v) => {
      Combinations(v.split(""), course[i]).forEach((x) => {
        if (!map[x]) map[x] = 1;
        else map[x]++;
      });
      for (const k in map) {
        if (map[k] > max) max = map[k];
      }
    });
    for (const k in map) {
      if (map[k] === max && max > 1) answer.push(k);
    }
  }

  return answer.sort();
}
const Combinations = (arr, num) => {
  const results = [];

  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((select, i, origin) => {
    const remainder = origin.slice(i + 1);
    const combinations = Combinations(remainder, num - 1);
    const combine = combinations.map((v) => [select, ...v].sort().join(""));
    results.push(...combine);
  });

  return results;
};
