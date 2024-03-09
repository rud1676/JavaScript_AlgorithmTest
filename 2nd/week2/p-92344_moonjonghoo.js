function solution(board, skill) {
  let answer = 0;
  let arr = Array.from({ length: board.length + 1 }, () => Array(board[0].length + 1).fill(0)); // 밑과 옆으로 board보다 1을 증가시킨 배열을 생성

  for (let i = 0; i < skill.length; i++) {
    let current = skill[i];
    let attack = current[0] === 1 ? -1 : 1;
    arr[current[1]][current[2]] += current[5] * attack; // (x1, y1)
    arr[current[3] + 1][current[2]] += current[5] * attack * -1; // (x2+1,y1)
    arr[current[1]][current[4] + 1] += current[5] * attack * -1; // (x1,y2+1)
    arr[current[3] + 1][current[4] + 1] += current[5] * attack; // (x2+1,y2+1)
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      arr[i + 1][j] += arr[i][j]; // 해당 값을 누적하여 위에서 아래로 더한다
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      arr[i][j + 1] += arr[i][j]; // 해당 값을 누적하여 왼쪽에서 오른쪽으로 더한다
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j] += arr[i][j]; // board에 해당 배열인 arr을 더해 최종 배열
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] > 0) {
        answer++; // 해당 값 중 0보다 큰 위치의 수
      }
    }
  }

  return answer;
}
