const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);
const times = input[1].split(" ").map(Number);

let y = 0, m = 0;

for (let i = 0; i < n; i++) {
    y += Math.floor(times[i] / 30) + 1;
    m += Math.floor(times[i] / 60) + 1;
}

y *= 10;
m *= 15;

if (y === m) {
    console.log("Y M", y);
} else if (y < m) {
    console.log("Y", y);
} else {
    console.log("M", m);
}
