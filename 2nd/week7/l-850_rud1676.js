/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var rectangleArea = function (rectangles) {
  // 1,000,000,000
  // 숫자가 엄청 크다
  // 계산방법이 있나?
  // 2차원 배열을 안만들고 계산할 수 있나?
  // 솔루션 보게됨 => 다시풀기
  // 2차원으로 라인스위핑 확장하기 ..

  const sweaping = [];
  const mod = 1000000007n;
  rectangles.map((v) => {
    const x1 = v[0];
    const x2 = v[2];
    sweaping.push([v[1], "open", x1, x2]);
    sweaping.push([v[3], "close", x1, x2]);
  });

  sweaping.sort((a, b) => a[0] - b[0]);
  let cal = [];
  let area = 0n;
  let prevy = sweaping[0][0];
  sweaping.map((v) => {
    const [y, type, x1, x2] = v; // y type x1 x2 추출

    // 줄의 길이 계산 by linesweaping
    let len = 0,
      cur = -Infinity;
    for (let [x1, x2] of cal) {
      cur = Math.max(cur, x1);
      len += Math.max(0, x2 - cur);
      cur = Math.max(cur, x2);
    }
    area += BigInt(len) * BigInt(y - prevy);
    area %= mod;
    prevy = y;

    if (type === "open") {
      cal.push([x1, x2]); // x1,x2
      cal.sort((a, b) => a[0] - b[0]); // 항상 정렬을 유지해야됨
    } else if (type === "close") {
      cal.splice(
        cal.findIndex((e) => e[0] === x1 && e[1] === x2),
        1
      );
    }
  });
  return area % mod;
};
