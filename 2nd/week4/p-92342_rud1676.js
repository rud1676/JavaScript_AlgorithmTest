function solution(n, info) {
  var answer = [];
  // *110 n의 화살에 11만큼 제곱?
  const cs = [];
  function cCase(arr, cnt, pos) {
    if (cnt === 0) {
      cs.push(arr);
      return;
    }
    for (let i = 0; i <= info[pos] + 1; i++) {
      arr[pos] = i;
      if (cnt - i >= 0) {
        cCase(JSON.parse(JSON.stringify(arr)), cnt - i, pos + 1);
      }
    }
  }

  cCase(Array(11).fill(0), n, 0);

  function check(arr) {
    let ls = 0,
      as = 0;
    for (let i = 0; i < 11; i++) {
      if (info[i] === 0 && arr[i] === 0) continue;
      else if (info[i] >= arr[i]) as += 10 - i;
      else ls += 10 - i;
    }
    return ls - as;
  }

  let mx = -1;
  for (let i = 0; i < cs.length; i++) {
    const diff = check(cs[i]);
    if (diff > mx) {
      mx = diff;
    }
  }

  if (mx === -1 || mx === 0) return [-1];

  // 같은게 여러개 일 경우
  for (let i = 0; i < cs.length; i++) {
    const diff = check(cs[i]);
    if (diff === mx) {
      answer.push(cs[i]);
    }
  }
  answer.sort((a, b) => {
    for (let i = 10; i >= 0; i--) {
      if (a[i] !== b[i]) {
        if (a[i] - b[i] < 0) return 1;
        else return -1;
      }
    }
  });

  return answer[0];
}
