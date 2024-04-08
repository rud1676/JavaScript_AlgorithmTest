function solution(stuff, limit) {
  let count = 0;
  let sortedStuff = stuff.sort((a, b) => a - b);

  while (sortedStuff.length !== 0) {
    if (sortedStuff[0] + sortedStuff[sortedStuff.length - 1] <= limit) {
      count++;
      sortedStuff.shift();
      sortedStuff.pop();
    } else {
      count++;
      sortedStuff.pop();
    }
  }
  return count;
}
