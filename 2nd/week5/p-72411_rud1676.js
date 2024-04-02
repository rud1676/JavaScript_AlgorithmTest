function solution(orders, course) {
  var answer = [];
  // 가장 많은 것들만 뽑아낸다.
  // course 를 역순으로
  // 하나의 단어에서 추론할 수 있는 콤비네이션 다 저장해서 최댓값으로

  function comb(arr, length) {
    let result = [];
    if (length === 1) return arr.map((v) => [v]);
    arr.forEach((fix, idx, origin) => {
      const rest = arr.slice(idx + 1);
      const c = comb(rest, length - 1);
      const attach = c.map((v) => [...v, fix]);
      result.push(...attach);
    });
    return result;
  }
  course.map((v) => {
    const mp = {};
    let mx = 0;
    orders.map((str) => {
      comb(str.split(""), v).map((arr) => {
        //length만큼의 comb들 추출
        const combstr = arr.sort().join("");
        if (!mp[combstr]) mp[combstr] = 1;
        else mp[combstr]++;
      }); // 그리고 모두 카운팅
      for (let a in mp) {
        if (mp[a] > mx) mx = mp[a];
      } // 해당 케이스에서 어떤게 조합이 제일 많은 숫자인지 체크
    });
    for (let a in mp) {
      if (mx === mp[a] && mx !== 1) answer.push(a);
    }
  });

  return answer.sort();
}
