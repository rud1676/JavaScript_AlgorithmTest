function solution(prices) {
  const result = new Array(prices.length);
  const queue = [];

  for (let i = 0; i < prices.length; i += 1) {
    while (queue[queue.length - 1] && queue[queue.length - 1].price > prices[i]) {
      result[queue[queue.length - 1].index] = i - queue[queue.length - 1].index;
      queue.pop();
    }

    queue.push({
      price: prices[i],
      index: i,
    });
  }
    
  while (queue.length) {
    const { index } = queue.pop();

    result[index] = prices.length - 1 - index;
  }

  return result;
}