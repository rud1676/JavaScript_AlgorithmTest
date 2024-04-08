function solution(gems) {
  let info = new Map();
  for (let i = 0; i < gems.length; i++) {
    if (info.has(gems[i])) {
      info.set(gems[i], [...info.get(gems[i]), i]);
    } else info.set(gems[i], [i]);
  }
  console.log(info);
  var answer = [];
  return answer;
}

console.log(solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]));
