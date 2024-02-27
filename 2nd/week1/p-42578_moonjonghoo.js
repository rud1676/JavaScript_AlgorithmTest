//의상
function solution(clothes) {
  let hash = new Map();
  for (let i = 0; i < clothes.length; i++) {
    if (hash.has(clothes[i][1])) {
      hash.set(clothes[i][1], hash.get(clothes[i][1]) + 1);
    } else {
      hash.set(clothes[i][1], 1);
    }
  }
  let answer = 1;
  for (const x of hash.keys()) {
    answer *= hash.get(x) + 1;
  }

  return answer - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
