## 코딩테스트 문제 접근하기!

1. 보통 예시1번이 가장 쉬운 예시를 준다. -> 이것을 기반으로 먼저 로직을 짠다.

## 그외에 꿀팁

### dfs => 정점의 가치를 매기는 방법

- 모든 탐색한 경로가 몇개인지 새고싶을때: 각 정점의 가치를 1로 매긴다음 더한다!

```js
function dfs(y, x, mp, cnt) {
  // dfs 순회!
  if (mp[y][x] !== 0) return;
  let ret = 1; // 정점에 가치를 매긴다 (1로!!)
  mp[y][x] = cnt;
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= b || nx < 0 || ny >= a || ny < 0 || mp[ny][nx] !== 0) continue;
    ret += dfs(ny, nx, mp, cnt); // 순회되는 정점의 가치를 더한다. - 모든 정점의 가치가 1이므로 탐색한 노드의 값이 나온다!
  }
  return ret;
}
```

### dfs => 탐색이 다른 탐색에 영향을 미치지 않아야할때

원복을 꼭해야한다.!! visited배열을 0으로 초기화한다.

```js
function dfs(y, x) {
  if (y === 0 && x === c - 1) {
    if (mp[y][x] === k) return 1;
    else return 0;
  }
  let ret = 0;

  for (let i = 0; i < 4; i++) {
    const ny = y + diff[i][0];
    const nx = x + diff[i][1];
    if (
      ny < 0 ||
      ny >= r ||
      nx < 0 ||
      nx >= c ||
      mp[ny][nx] !== 0 ||
      INPUT[ny][nx] === "T"
    )
      continue;
    mp[ny][nx] = mp[y][x] + 1;
    ret += dfs(ny, nx);
    mp[ny][nx] = 0; //방문하지 않은것으로 처리
  }
  return ret;
}
```

### javascript에서 순열 추출 알고리즘

```js
function permutation(arr, length) {
  const result = [];
  if (length === 1) return arr.map((v) => [v]);

  arr.forEach((fix, idx, origin) => {
    const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    const perm = permutation(rest, length - 1); //순열들이 나온다.
    const attech = perm.map((v) => [...v, fix]);
    result.push(...attech);
  });
  return result;
}

console.log(permutation([1, 2, 3, 4], 3));
```

기본틀은 외워서 자유롭게 변형하기!! 기본개념은 아래와 같음!!

```
1(선택) -> permutation([2,3,4]) -> 4(선택) -> permutation(1,2) -> ...
2(선택) -> permutation([1,3,4]) -> 3(선택) -> permutation(1,2) -> ...
3(선택) -> permutation([1,2,4]) -> ...
4(선택) -> permutation([1,2,3]) -> ...
```

### 문제풀때 유의사항

- 처음처리, 끝처리는 항상 생각단계에서 예외처리하자

### 내가 가진 알고리즘 도구들을 인식하자

- 비트마스킹
- 백트랙킹(p[next] = prev)
- dfs,bfs(queue에선 size해서 색칠하기도 있음)

### 접근법?

무식하게 풀기 => dp => 그리디.
