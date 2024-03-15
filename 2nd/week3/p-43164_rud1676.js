function solution(tickets) {
  let answer = [];
  //10000*9999 99990000
  // INC에서 출발
  // 모든 항공권 다쓰기 -> true false
  const mp = {};
  tickets.map((v) => {
    if (mp[v[0]]) mp[v[0]].push([v[1], 0]);
    else mp[v[0]] = [[v[1], 0]];
  });

  function go(pos, cur) {
    if (cur.length === tickets.length + 1) {
      answer.push(Array.of(...cur));
      return;
    }
    if (!mp[pos]) {
      return;
    }
    for (let tic of mp[pos]) {
      if (tic[1]) continue;
      tic[1] = 1;
      cur.push(tic[0]);
      go(tic[0], cur);
      cur.pop();
      tic[1] = 0;
    }
  }

  go("ICN", ["ICN"]);

  answer.sort((a, b) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) return 1;
      else if (a[i] < b[i]) return -1;
    }
    return 0;
  });

  return answer[0];
}
