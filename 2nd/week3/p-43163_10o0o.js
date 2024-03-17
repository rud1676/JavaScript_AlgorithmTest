function solution(begin, target, words) {
  const n = words.length;
  const m = begin.length;

  let queue = [begin];
  let transCounts = 0;
  const visited = new Array(n).fill(0);

  const checkDiff = (w1, w2) => {
    let diffCounts = 0;

    for (let i = 0; i < m; i += 1) {
      if (w1[i] !== w2[i]) {
        diffCounts += 1;
        if (diffCounts >= 2) return false;
      }
    }

    return true;
  };

  while (queue.length) {
    const newQueue = [];

    for (const queueWord of queue) {
      if (queueWord === target) return transCounts;

      for (let i = 0; i < n; i += 1) {
        if (!visited[i] && checkDiff(queueWord, words[i])) {
          visited[i] = 1;
          newQueue.push(words[i]);
        }
      }
    }

    transCounts += 1;
    queue = newQueue;
  }

  return 0;
}