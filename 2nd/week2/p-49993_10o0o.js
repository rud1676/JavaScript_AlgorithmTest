function solution(skill, skillTrees) {
  const skillSplit = skill.split('');
  const alphaSet = new Set(skillSplit);
  const availableSet = new Set();

  let tmp = '';
  availableSet.add(tmp);

  for (let i = 0; i < skill.length; i += 1) {
    tmp += skill[i];
    availableSet.add(tmp);
  }

  return skillTrees.map(
    (el) => el
      .split('')
      .filter((str) => alphaSet.has(str))
      .join(''),
  ).filter((el) => availableSet.has(el)).length;
}
