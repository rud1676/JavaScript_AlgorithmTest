function solution(routes) {
  routes.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : b[1] - a[1]));

  let result = 0;
  let pos = -30001;

  for (const [i, o] of routes) {
    if (i > pos) {
      pos = o;
      result += 1;
    } else {
      pos = Math.min(pos, o);
    }
  }

  return result;
}