function permu(arr, length) {
  const result = [];
  if (length === 1) return arr.map((v) => [v]);

  arr.forEach((fix, idx, origin) => {
    const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    const per = permu(rest, length - 1);
    const sumarr = per.map((v) => [...v, fix]);
    result.push(...sumarr);
  });
  return result;
}
function solution(k, dungeons) {
  var answer = -1;
  // permutation뽑아서
  // 다 시뮬레이션 돌려서
  // 최대 던젼갯수 반환
  // 그래도 5만개뿐!
  const per = permu(
    Array(dungeons.length)
      .fill(0)
      .map((_, i) => i),
    dungeons.length
  );

  for (const orders of per) {
    let simulk = k;
    let cnt = 0;
    for (let i = 0; i < orders.length; i++) {
      const [min, cost] = dungeons[orders[i]];
      if (simulk < min) continue;
      simulk -= cost;
      cnt++;
    }
    answer = Math.max(answer, cnt);
  }

  return answer;
}
