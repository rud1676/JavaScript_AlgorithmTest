function solution(n, edge) {
  // 인접 리스트 구현
  let graph = Array.from({ length: n + 1 }, () => []);
  for ([a, b] of edge) {
    graph[a].push(b);
    graph[b].push(a);
  }

  // 방문 여부 체크 배열
  let check = Array.from({ length: n + 1 }, () => false);

  // 최대 거리 및 최대 거리 노드 개수
  let maxDist = 0;
  let maxNodeCount = 0;

  // 1번 노드부터 BFS 시작
  function BFS(start) {
    // 큐 및 방문 초기화
    let queue = [start];
    check[start] = true;

    // 현재 거리
    let dist = 0;

    while (queue.length) {
      // 현재 레벨 노드 탐색
      let currentSize = queue.length;
      while (currentSize--) {
        let curNode = queue.shift();

        // 최대 거리 갱신
        if (dist > maxDist) {
          maxDist = dist;
          maxNodeCount = 1;
        } else if (dist === maxDist) {
          maxNodeCount++;
        }

        // 인접 노드 탐색
        for (let nextNode of graph[curNode]) {
          if (!check[nextNode]) {
            queue.push(nextNode);
            check[nextNode] = true;
          }
        }
      }

      // 거리 증가
      dist++;
    }
  }

  BFS(1);

  return maxNodeCount;
}
