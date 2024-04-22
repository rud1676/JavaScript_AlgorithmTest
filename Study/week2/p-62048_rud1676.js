function solution(w, h) {
  // 소수라면 어케할까
  // 7 10
  // 규칙을 도저히 모르겟다
  var answer = 1;
  const gcd = (a, b) => {
    return b > 0 ? gcd(b, a % b) : a;
  };
  const gc = gcd(w, h);
  if (gc !== 1) {
    const mw = Math.floor(w / gc);
    const mh = Math.floor(h / gc);
    console.log(mw, mh);
    answer = w * h - (mw + mh - 1) * gc;
  } else {
    answer = w * h - (h + w - 1);
  }
  return answer;
}
