function solution(genres, plays) {
  let hash = new Map();
  for (let i = 0; i < genres.length; i++) {
    if (hash.has(genres[i])) {
      hash.set(genres[i], [...hash.get(genres[i]), [i, plays[i]]]);
    } else {
      hash.set(genres[i], [[i, plays[i]]]);
    }
  }
  let total = [];
  for (const x of hash) {
    let key = x[0];
    let song = x[1].length;
    let sum = 0;
    for (let i = 0; i < song; i++) {
      sum += x[1][i][1];
    }
    total.push([key, sum]);
  }
  let answer = [];
  total.sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < total.length; i++) {
    if (hash.get(total[i][0]).length >= 2) {
      let max = hash.get(total[i][0]).sort((a, b) => b[1] - a[1]);
      answer.push(max[0][0]);
      answer.push(max[1][0]);
    } else answer.push(hash.get(total[i][0])[0][0]);
  }
  return answer;
}

solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]);
