/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
// 698번이랑 똑같은 문제같은데 왜 틀릴까? 시간초과가 왜날까? 저기선 안떳는데
var makesquare = function (matchsticks) {
  let total = matchsticks.reduce((acc, cur) => acc + cur, 0);
  if (total % 4 !== 0 || matchsticks.length < 4) return false;
  let l = total / 4;
  let s = new Map();
  let yes = false;
  function go(idx, sum, count) {
    if (count === 4) {
      yes = true;
      return true;
    }
    let str = matchsticks.join();
    if (s.has(str)) return false;
    if (sum === l) go(0, 0, count + 1);
    if (sum > l) return false;
    for (let i = idx; i < matchsticks.length; i++) {
      if (matchsticks[i] === null) continue;
      const temp = matchsticks[i];
      matchsticks[i] = null;
      if (go(idx + 1, sum + temp, count)) {
        console.log("count", count);
        return true;
      }
      matchsticks[i] = temp;
    }
    s.set(str, false);
    return false;
  }
  go(0, 0, 0);
  return yes;
};
