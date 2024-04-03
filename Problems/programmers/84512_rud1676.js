function level(c) {
  if (c === "A") return 0;
  if (c === "E") return 1;
  if (c === "I") return 2;
  if (c === "O") return 3;
  if (c === "U") return 4;
}

function solution(word) {
  var answer = 1;
  for (let i = 0; i < word.length; i++) {
    if (i === 0) answer += 781 * level(word[i]);
    if (i === 1) answer += 156 * level(word[i]) + 1;
    if (i === 2) answer += 31 * level(word[i]) + 1;
    if (i === 3) answer += 6 * level(word[i]) + 1;
    if (i === 4) answer += level(word[i]) + 1;
  }

  return answer;
}

//어떤사람은 이걸 한줄로 풀었네..
// return words.split('').reduce((r, c, i) => r + [781, 156, 31, 6, 1][i] * ['A', 'E', 'I', 'O', 'U'].indexOf(c) + 1, 0);
