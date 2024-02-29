function solution(prices) {
  var answer = Array(prices.length).fill(0);
  const st = [];
  prices.map((v, i) => {
    // 맨 앞 주식가격부터 비교
    while (st.length && i !== prices.length - 1) {
      // 스택에 자료가 존재하면 비교 시작
      let [val, idx] = st.pop();
      if (val > v) answer[idx] = i - idx;
      else {
        st.push([val, idx]);
        break;
      }
    }
    if (i !== prices.length - 1) st.push([v, i]); // 마지막이 아니면 스택추가
    else {
      // 마지막에 스택 다 계산하기
      answer[i] = 0;
      while (st.length) {
        let [val, idx] = st.pop();
        answer[idx] = i - idx; // 나머지 다 비우기
      }
    }
  });

  return answer;
}
