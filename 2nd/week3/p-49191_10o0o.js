function solution(n, results) {
  const winGraph = new Array(n + 1).fill().map(() => new Set());
  const loseGraph = new Array(n + 1).fill().map(() => new Set());
  let result = 0;

  for (const [winner, loser] of results) {
    winGraph[winner].add(loser);
    loseGraph[loser].add(winner);
  }

  const bfs = (graph, people, visited, acc) => {
    if (!people.length) return acc;

    const newPeople = [];

    for (const person of people) {
      const graphPeople = graph[person];

      for (const graphPerson of graphPeople) {
        if (!visited[graphPerson]) {
          visited[graphPerson] = 1;
          newPeople.push(graphPerson);
        }
      }
    }

    return bfs(graph, newPeople, visited, acc + newPeople.length);
  };

  const getAcc = (graph, person) => {
    const visited = new Array(n + 1).fill(0);
    visited[person] = 1;

    return bfs(graph, [person], visited, 0);
  };

  for (let i = 1; i <= n; i += 1) {
    if (getAcc(winGraph, i) + getAcc(loseGraph, i) === n - 1) {
      result += 1;
    }
  }

  return result;
}