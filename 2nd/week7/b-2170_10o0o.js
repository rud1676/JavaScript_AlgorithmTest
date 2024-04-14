/* eslint-disable no-shadow */
const fs = require('fs');

const inputs = fs.readFileSync(process.env.LOGNAME === 'jake' ? './input.txt' : '/dev/stdin')
  .toString().trim().split('\n');

const n = +inputs[0];
const infos = inputs.slice(1).map((el) => el.split(' ').map(Number));

infos.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  }

  return a[1] - b[1];
});

let pos = infos[0][1];
let sum = infos[0][1] - infos[0][0];

for (let i = 1; i < n; i += 1) {
  const [s, e] = infos[i];

  if (e <= pos) continue;

  sum += e - Math.max(pos, s);

  pos = e;
}

console.log(sum);
