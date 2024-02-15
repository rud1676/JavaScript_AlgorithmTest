const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = parseInt(input[0].split(' ')[0]);
const M = parseInt(input[0].split(' ')[1]);

let balls = Array.from({length: N}, (_, i) => i + 1);

for(let i = 1; i <= M; i++){
  const [x, y] = input[i].split(' ').map(Number);
  [balls[x-1], balls[y-1]] = [balls[y-1], balls[x-1]];
}

console.log(balls.join(' '));
