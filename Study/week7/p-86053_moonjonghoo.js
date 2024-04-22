function solution(a, b, g, s, w, t) {
  const cityLen = g.length;
  let start = 0;
  let end = 10e14 * 4;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    const [gMax, sMin] = findGmaxSet(mid);
    const [gMin, sMax] = findSmaxSet(mid);

    const passConstraint = gMax >= a && sMax >= b && a + b <= gMax + sMin;

    if (passConstraint) end = mid - 1;
    else start = mid + 1;
  }

  return start;

  function findGmaxSet(time) {
    let gMax = 0;
    let sMin = 0;
    for (let i = 0; i < cityLen; i++) {
      const [tmpG, tmpS] = calcGmaxSet(i, time);
      gMax += tmpG;
      sMin += tmpS;
    }
    return [gMax, sMin];
  }

  function findSmaxSet(time) {
    let sMax = 0;
    let gMin = 0;
    for (let i = 0; i < cityLen; i++) {
      const [tmpG, tmpS] = calcSmaxSet(i, time);
      gMin += tmpG;
      sMax += tmpS;
    }
    return [gMin, sMax];
  }

  function calcGmaxSet(idx, time) {
    const availableTrip = Math.round(time / (t[idx] * 2));
    const totalAmount = availableTrip * w[idx];
    const gMax = calcMaxAmount(idx, totalAmount, g);
    const sMin = gMax < totalAmount ? calcMaxAmount(idx, totalAmount - gMax, s) : 0;
    return [gMax, sMin];
  }

  function calcSmaxSet(idx, time) {
    const availableTrip = Math.round(time / (t[idx] * 2));
    const totalAmount = availableTrip * w[idx];
    const sMax = calcMaxAmount(idx, totalAmount, s);
    const gMin = sMax < totalAmount ? calcMaxAmount(idx, totalAmount - sMax, g) : 0;
    return [gMin, sMax];
  }

  function calcMaxAmount(idx, totalAmount, category) {
    const amount = category[idx];
    if (amount >= totalAmount) return totalAmount;
    else return amount;
  }
}
