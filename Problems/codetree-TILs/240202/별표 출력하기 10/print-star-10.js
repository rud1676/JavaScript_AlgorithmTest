const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = Number(input);

for(let i = 0; i <= 2 * n - 1; i++) {
    let starCount = i % 2 === 0 ? 1 + i / 2 : n - (i - 1) / 2;
    console.log('* '.repeat(starCount).trim());
}