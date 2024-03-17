function solution(begin, target, words) {
  let n = words.length;
  let check = Array.from({ length: n }, () => false);
  let time = [];
  if (words.includes(target) === false) return 0;
  function DFS(start) {
    if (start === target) {
      let answer = 0;
      for (let i = 0; i < check.length; i++) {
        if (check[i]) {
          answer++;
        }
      }
      time.push(answer);
    } else {
      for (let i = 0; i < n; i++) {
        if (cantranslate(start, words[i]) && !check[i]) {
          // 방문 여부 체크 추가
          check[i] = true;
          DFS(words[i]);
          check[i] = false;
        }
      }
    }
  }
  DFS(begin);
  return Math.min(...time);
}

function cantranslate(word, transltate) {
  let diffrent = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== transltate[i]) {
      diffrent++;
    }
  }
  if (diffrent === 1) return true;
  else return false;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
