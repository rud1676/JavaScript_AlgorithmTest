const INPUT = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const moum = ["a", "o", "i", "e", "u"];

function valid(str) {
  if (
    moum.includes(str[0]) === true &&
    moum.includes(str[1]) === true &&
    moum.includes(str[2]) === true
  )
    return false;
  if (
    moum.includes(str[0]) === false &&
    moum.includes(str[1]) === false &&
    moum.includes(str[2]) === false
  )
    return false;
  return true;
}
function solution(str) {
  let moumsig = false;
  let prev = str[0];
  for (let i = 0; i < str.length; i++) {
    if (moum.includes(str[i])) moumsig = true;
    if (i < str.length - 2) {
      if (!valid(str.slice(i, i + 3))) {
        console.log(`<${str}> is not acceptable.`);
        return;
      }
    }
    if (i >= 1 && prev != "e" && prev != "o" && prev === str[i]) {
      console.log(`<${str}> is not acceptable.`);
      return;
    }
    prev = str[i];
  }
  if (!moumsig) console.log(`<${str}> is not acceptable.`);
  else console.log(`<${str}> is acceptable.`);
}

while (INPUT) {
  const str = INPUT.shift();
  if (str === "end") break;
  solution(str);
}
