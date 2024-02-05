const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim();

let n = +input;

for(let i = 0; i < n; i++) {
  let str = '';
  for(let j = 0; j < i; j++) {
    str += '  ';
  }
  for(let j = 0; j < 2*n - 2*i - 1; j++) {
    str += '* ';
  }
  console.log(str);
}
for(let i = n - 2; i >= 0; i--) {
  let str = '';
  for(let j = 0; j < i; j++) {
    str += '  ' ;
  }
  for(let j = 0; j < 2*n - 2*i - 1; j++) {
    str += '* ';
  }
  console.log(str);
}