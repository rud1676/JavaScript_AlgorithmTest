/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
const fs = require('fs');

const inputs = fs.readFileSync(process.env.LOGNAME === 'jake' ? './input.txt' : '/dev/stdin')
  .toString().trim().split('\n')
  .map(Number);

const n = inputs[0];
const people = inputs.slice(1);
const stack = [[people.pop(), 1]];
let result = 0;

while (people.length) {
  const person = people.pop();
  let acc = 0;
  let flag = 0;
  let flag2 = 0;
  let tmp = null;

  while (stack.length) {
    if (stack[stack.length - 1][0] > person) {
      flag = 1;
      break;
    } else if (stack[stack.length - 1][0] <= person) {
      const popped = stack.pop();
      if (popped[0] === person) {
        flag2 = 1;
        tmp = popped[1] + 1;
      }

      acc += popped[1];
    }
  }

  acc += flag ? 1 : stack.length;
  stack.push([person, flag2 ? tmp : 1]);
  result += acc;
}

console.log(result);
