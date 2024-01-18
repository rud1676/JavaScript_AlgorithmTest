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

## 문자열 다루기

### 시간 형식으로 출력하기 padStart

```js
const at = 301; //301초를 05:01초로 표현
console.log(
  `${Math.floor(at / 60)
    .toString()
    .padStart(2, "0")}:${(at % 60).toString().padStart(2, "0")}`
);
//해당 문법은 레터럴 문법 + 00:00으로 자리수 채워주는 역활을 해주는 문법임!
```

### 레터럴 문법(ES6)

문자열에 변수값을 넣어서 문자열로 바로 치환이 가능한 문법 사용법은 아래와 같음! - 백틱으로 시작해 백틱으로 끝나고 변수는 ${}안에 넣어둠!

```js
const h = 53;
const m = 40;
`${h}:${m}`; //53:40 으로 출력됨!!
```