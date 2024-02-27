// 포켓몬 뽑기
function solution(nums) {
  let answer = 0;
  let set = new Set();
  console.log(set);
  let pick = nums.length / 2;
  nums.forEach((v) => {
    set.add(v);
  });
  if (set.size >= pick) answer = pick;
  else answer = set.size;
  return answer;
}
