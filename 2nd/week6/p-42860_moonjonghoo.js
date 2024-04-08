function movealphabat(s) {
  let rule = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (rule.match(s).index > 13) {
    return 26 - rule.match(s).index;
  } else return rule.match(s).index;
}

function solution(name) {
  let answer = 0;
  let find = [];
  for (let i = 0; i < name.length; i++) {
    find.push(movealphabat(name[i]));
  }
  let minMove = find.length - 1;
  for (let i = 0; i < find.length; i++) {
    const temp = find[i];
    answer += temp;

    let cursor = i + 1;
    while (cursor < find.length && find[cursor] === 0) cursor++;

    minMove = Math.min(minMove, i * 2 + find.length - cursor, i + 2 * (find.length - cursor));
  }
  return answer + minMove;
}
