function solution(arr) {
  var answer = [];

  let prev = -1;
  arr.map((v) => {
    if (prev != v) answer.push(v);
    prev = v;
  });

  return answer;
}
