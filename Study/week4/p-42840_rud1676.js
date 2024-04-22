function solution(answers) {
  var answer = [];
  const mp = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const cnt = [0, 0, 0];
  answers.map((v, idx) => {
    for (let i = 0; i < 3; i++) {
      if (v === mp[i][idx % mp[i].length]) cnt[i]++;
    }
  });

  const mx = Math.max(...cnt);
  for (let i = 0; i < 3; i++) {
    if (mx === cnt[i]) answer.push(i + 1);
  }

  return answer;
}
