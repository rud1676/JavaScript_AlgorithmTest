function moveBlock(block) {
  let minX = Math.min(...block.map((v) => v[0]));
  let minY = Math.min(...block.map((v) => v[1]));

  return block.map((v) => [v[0] - minX, v[1] - minY]).sort();
}

function rotate(block) {
  let max = Math.max(...block.map((v) => Math.max(v[0], v[1])));
  let rotateBlock = block.map((v) => [max - v[1], v[0]]);

  return moveBlock(rotateBlock);
}

function bfs(start, table, k) {
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  let needVisit = start;
  let block = [];
  while (needVisit.length > 0) {
    let [cx, cy] = needVisit.shift();
    block.push([cx, cy]);
    for (let i = 0; i < 4; i++) {
      let nx = cx + dx[i];
      let ny = cy + dy[i];

      if (nx >= 0 && ny >= 0 && nx < table.length && ny < table.length && table[nx][ny] !== k) {
        needVisit.push([nx, ny]);
        table[nx][ny] = k;
      }
    }
  }
  return moveBlock(block);
}

function solution(game_board, table) {
  let blanks = [];
  let blocks = [];
  for (let i = 0; i < game_board.length; i++) {
    for (let j = 0; j < game_board.length; j++) {
      if (game_board[i][j] === 0) {
        game_board[i][j] = 1;
        blanks.push(bfs([[i, j]], game_board, 1));
      }
      if (table[i][j] === 1) {
        table[i][j] = 0;
        blocks.push(bfs([[i, j]], table, 0));
      }
    }
  }

  let answer = 0;
  blocks.forEach((val) => {
    for (let i = 0; i < blanks.length; i++) {
      let match = false;
      for (let j = 0; j < 4; j++) {
        val = rotate(val);
        if (JSON.stringify(val) === JSON.stringify(blanks[i])) {
          blanks.splice(i, 1);
          answer += val.length;
          match = true;
          break;
        }
      }
      if (match) break;
    }
  });
  return answer;
}
