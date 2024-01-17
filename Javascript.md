# Javascript

## 숫자범위

Number : -9007199254740991 ~ 9007199254740991

## BigInt

- BigInt는 정수 리터럴의 뒤에 n을 붙이거나(10n) 함수 BigInt()를 호출해 생성할 수 있습니다.

Number의 1은 1n으로 표현!
아니면 BigInt(1) 이렇게 표현!

> 경고: 소수점 결과를 포함하는 연산을 BigInt와 사용하면 소수점 이하는 사라집니다.

비교연산과 정렬 연산 사용시 일반적으로 사용 가능!

```js
1n < 2;
// ↪ true
2n > 1;
// ↪ true
2n >= 2;
// ↪ true
//

const mixed = [4n, 6, -12n, 10, 4, 0, 0n];
// ↪  [4n, 6, -12n, 10, 4, 0, 0n]

mixed.sort();
// ↪ [-12n, 0, 0n, 10, 4n, 4, 6]
```

BigInt는 다음의 상황에서는 Number처럼 행동합니다.

- Boolean 함수를 사용해 Boolean 객체로 변환
- 논리 연산자 ||, &&, !와 함께 사용
- if문 등 조건 판별 시

출력할 때 n을 제외시킬려면 toString()또는 Number로 감싸기!(범위 주의)

## 2nd Array

```js
const mp = Array.from(Array(a), () => Array(b).fill(0));
// mp는 컬럼길이 a, row 길이 b로 2차원 배열이 만들어짐!
```

## dfs => 정점의 가치를 매기는 방법

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
