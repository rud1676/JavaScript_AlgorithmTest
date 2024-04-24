function solution(board, skill) {
  var answer = 0;
  // board는 1000 * 1000 => 1,000,000ㅏ
  // skill 250,000 => 250,000
  // 250,000,000,000 이 ㅏㄴ오네..?;;
  // kakao page 참고
  // 누적합으로 표현하면 250,000의 변화를 한번에 표현할 수 있다.
  // 2차원 누적합 + 일정한 합은 누적합으로 표현!
  const sum = Array.from(Array(board.length + 1), () =>
    Array(board[0].length + 1).fill(0)
  );
  skill.map((v) => {
    let deg = v[5];
    if (v[0] === 1) {
      deg *= -1;
    }
    sum[v[1]][v[2]] += deg;
    sum[v[3] + 1][v[4] + 1] += deg;
    sum[v[1]][v[4] + 1] -= deg;
    sum[v[3] + 1][v[2]] -= deg;
  });

  for (let i = 0; i < sum.length; i++) {
    let s = 0;
    for (let j = 0; j < sum[0].length; j++) {
      s += sum[i][j];
      sum[i][j] = s;
    }
  }

  for (let i = 0; i < sum[0].length; i++) {
    let s = 0;
    for (let j = 0; j < sum.length; j++) {
      s += sum[j][i];
      sum[j][i] = s;
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] + sum[i][j] > 0) answer++;
    }
  }

  return answer;
}
