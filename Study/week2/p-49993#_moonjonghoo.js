function solution(skill, skill_trees) {
  let count = 0;
  for (x of skill_trees) {
    let stack = skill.split("");
    let flag = stack[0];
    let answer = true;
    for (let i = 0; i < x.length; i++) {
      if (x[i] === flag) {
        stack.shift();
        flag = stack[0];
      } else if (stack.includes(x[i]) && x[i] !== flag) {
        answer = false;
      }
    }
    if (answer) count++;
  }
  return count;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
