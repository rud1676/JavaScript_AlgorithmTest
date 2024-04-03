function solution(s) {
  const arr = s.split(" ").map(Number);
  arr.sort((a, b) => a - b);
  console.log(arr);
  const answer = [arr[0], arr[arr.length - 1]];
  return answer.join(" ");
}
