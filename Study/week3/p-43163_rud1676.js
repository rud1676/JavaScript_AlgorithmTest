let min = Infinity;
function solution(begin, target, words) {
  let vst = {};
  words.map((v) => {
    vst[v] = false;
  });

  function dfs(word, cnt) {
    if (word === target) {
      min = Math.min(cnt);
    }
    if (min <= cnt) return;

    for (let w of words) {
      let dnum = 0;
      if (vst[w]) continue;
      for (let i = 0; i < w.length; i++) {
        if (w[i] !== word[i]) dnum++;
      }
      if (dnum === 1) {
        vst[w] = true;
        dfs(w, cnt + 1);
        vst[w] = false;
      }
    }
  }
  dfs(begin, 0);
  return min !== Infinity ? min : 0;
}
