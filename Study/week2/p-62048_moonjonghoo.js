function gcd(w, h) {
  // 처음 W와 H를 받습니다.

  // W와 H의 나머지를 구합니다.
  const mod = w % h;

  // 만약 나머지가 0일 경우 H를 반환합니다.
  if (mod === 0) {
    return h;
  }

  // 만약 0이 아닐경우 W에 H를 넣고 H에 나머지인 mod를 넣어 해당 함수를 다시 호출해 줍니다.
  return gcd(h, mod);
}

function solution(w, h) {
  // 최대 공약수를 구해줍니다.
  const gcdVal = gcd(w, h);

  // 공식에 맞춰 사용
  return w * h - (w + h - gcdVal);
}
