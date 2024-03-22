function check(num) {
  if (num === 2) return true;
  if (num % 2 === 0 || num === 0 || num === 1) return false;
  for (let i = 3; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
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

function solution(numbers) {
  var answer = new Set();
  // 조합식 만듬
  // 조합식으로 숫자 조합 다 check로 검사
  // true라면 set에 넣어줌
  // set갯수 반환
  for (let j = 1; j <= numbers.length; j++) {
    const per = permutation(
      Array(numbers.length)
        .fill(0)
        .map((v, i) => i),
      j
    );
    per.map((v) => {
      let num = "";
      for (let i = 0; i < v.length; i++) {
        num += numbers[v[i]];
      }
      num = Number(num);
      if (answer.has(num)) return;
      if (check(num)) answer.add(num);
    });
  }
  return answer.size;
}
