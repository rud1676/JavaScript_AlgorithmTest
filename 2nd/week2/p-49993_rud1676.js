function solution(skill, skill_trees) {
  var answer = 0;
  skill_trees.map((v) => {
    let cnt = 0;
    let sk = new Set(skill.split(""));

    let check = true;
    for (let ch of v) {
      if (sk.has(ch)) {
        if (skill[cnt] === ch) cnt++;
        else {
          check = false;
          break;
        }
      }
    }
    if (check) answer++;
  });

  return answer;
}
