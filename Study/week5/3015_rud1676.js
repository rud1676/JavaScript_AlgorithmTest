// 오아시스 키큰놈 작은놈 보는 문제 결국 못풀어서 답지봄

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = input.shift();

const st = [];
let ret = 0;
for (let i = 0; i < n; i++) {
  const t = input[i];
  let cnt = 1;
  while (st.length > 0 && st[st.length - 1][0] <= t) {
    ret += st[st.length - 1][1];
    if (st[st.length - 1][0] === t) {
      cnt += st[st.length - 1][1];
    } else {
      cnt = 1;
    }
    st.pop();
  }
  if (st.length > 0) ret++;
  st.push([t, cnt]);
}

console.log(ret);
