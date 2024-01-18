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
