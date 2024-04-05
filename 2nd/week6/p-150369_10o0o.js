function solution(cap, n, deliveries, pickups) {
  let result = 0;
  const memo = [0, 0];

  for (let i = n; i >= 0; i -= 1) {
    if (deliveries[i] + memo[0] <= 0) {
      memo[0] += deliveries[i];
      deliveries[i] = 0;
    } else {
      deliveries[i] += memo[0];
      memo[0] = 0;
    }

    if (pickups[i] + memo[1] <= 0) {
      memo[1] += pickups[i];
      pickups[i] = 0;
    } else {
      pickups[i] += memo[1];
      memo[1] = 0;
    }

    if (deliveries[i] || pickups[i]) {
      const count = Math.ceil(Math.max(deliveries[i], pickups[i]) / cap);

      memo[0] += deliveries[i] - count * cap;
      memo[1] += pickups[i] - count * cap;

      result += (i + 1) * 2 * count;
    }
  }

  return result;
}