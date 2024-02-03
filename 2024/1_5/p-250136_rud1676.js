let diff = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
let n = 0;
let m = 0;
// why runtime에러
function solution(land) {
  var answer = 0;
  n = land.length;
  m = land[0].length;
  const visit = Array.from(Array(n), () => Array(m).fill(0));
  let area = 1;
  const hash = {};
  // 500* 500 250,000 크기가 졸라크다. 어케해결하지...
  // 최악이 500 * 500 * 500 * 500 인거같긴하다.
  // 배열을 크게 생성해서 중복체크 빠엔 set으로 짠다
  // Array(2500000).fill(0) 이거보다 Set()으로 짜는게 훨 씬 빠르다
  // 두번째는 반드시 내부에 함수를 만들고 화살표 함수로 실행해 줄것.
  // 함수보다 스택으로 구현하는게 빠르다 ㅠㅜㅜㅜ <= 숫자가 ㅈㄴ 크다면 스택으로 구현하는 거 고려해봐야됨
  const dfs = (sy, sx) => {
    const st = [[sy, sx]];
    let size = 1;
    while (st.length) {
      const [y, x] = st.pop();
      for (let i = 0; i < 4; i++) {
        const ny = y + diff[i][0];
        const nx = x + diff[i][1];
        if (
          ny < 0 ||
          ny >= n ||
          nx < 0 ||
          nx >= m ||
          visit[ny][nx] ||
          land[ny][nx] === 0
        )
          continue;
        visit[ny][nx] = area;
        st.push([ny, nx]);
        size++;
      }
    }
    return size;
  };

  for (let i = 0; i < m; i++) {
    let result = 0;
    const VisitArea = new Set();

    for (let j = 0; j < n; j++) {
      if (land[j][i] === 1) {
        if (visit[j][i] === 0) {
          visit[j][i] = area;
          let cnt = dfs(j, i);
          hash[area] = cnt;
          area++;
        }
        if (VisitArea.has(visit[j][i])) continue;
        result += hash[visit[j][i]];
        VisitArea.add(visit[j][i]);
      }
    }
    answer = Math.max(result, answer);
  }
  return answer;
}
// 500* 500 * 500
