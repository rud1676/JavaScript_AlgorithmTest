function solution(n, results) {
  let answer = 0;

  // 각 선수들의 경기 결과를 담을 그래프를 초기화한다.
  const list = new Array(n).fill("").map((v) => ({ rank: {}, win: [], loose: [] }));

  // 그래프에 경기 결과 값을 추가한다.
  results.forEach(([win, loose]) => {
    list[win - 1].win.push(loose - 1);
    list[loose - 1].loose.push(win - 1);
  });

  // 각 정점에 연결된 간선을 순회하며 순위를 확인하는 재귀 함수
  function findRank(node, type, visited) {
    visited[node] = true;
    if (list[node].rank[type]) {
      return list[node].rank[type];
    }

    if (list[node][type].length < 1) {
      return 0;
    }

    let rank = 0;

    list[node][type].forEach((v) => {
      if (!visited[v]) {
        visited[v] = true;
        rank += 1 + findRank(v, type, visited);
      }
    });

    return rank;
  }

  // 각 선수 정점을 순회한다.
  for (let i = 0; i < n; i++) {
    // 나보다 앞선 순위의 선수들의 숫자
    const winner = findRank(i, "loose", new Array(n).fill(false));

    // 나보다 뒤 순위의 선수들의 숫자
    const looser = findRank(i, "win", new Array(n).fill(false));

    // 나보다 앞선 순위의 선수와 뒤 선수의 숫자가 전체 참가자 수 - 1과 같다면, 내 순위는 정확하다.
    if (winner + looser === n - 1) {
      answer++;
    }
  }

  return answer;
}

console.log(
  solution(5, [
    [4, 3],
    [4, 2],
    [3, 2],
    [1, 2],
    [2, 5],
  ])
);
