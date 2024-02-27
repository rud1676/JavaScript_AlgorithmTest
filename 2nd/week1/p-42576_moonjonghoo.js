function solution(participant, completion) {
  let hash = new Map();
  for (let x of participant) {
    if (hash.has(x)) {
      hash.set(x, hash.get(x) + 1);
    } else hash.set(x, 1);
  }
  for (let y of completion) {
    if (hash.has(y)) {
      hash.set(y, hash.get(y) - 1);
    } else return y;
  }
  for (let x of participant) {
    if (hash.get(x)) {
      return x;
    }
  }
}
