/* eslint-disable no-shadow */
const fs = require('fs');

const inputs = fs.readFileSync(process.env.LOGNAME === 'jake' ? './input.txt' : '/dev/stdin')
  .toString().trim().split('\n');

const [n, m] = inputs[0].split(' ').map(Number);
const map = inputs.slice(1).map((el) => el.split(' ').map(Number));

const stores = [];
const houses = [];

for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < n; j += 1) {
    if (map[i][j] === 2) stores.push([i, j]);
    if (map[i][j] === 1) houses.push([i, j]);
  }
}

const storeGroup = [];

if (stores.length <= m) {
  storeGroup.push(stores);
} else {
  const makeGroup = (index, group) => {
    if (group.length === m) {
      storeGroup.push([...group]);
      return;
    }

    for (let i = index; i < stores.length; i += 1) {
      group.push(stores[i]);
      makeGroup(i + 1, group);
      group.pop();
    }
  };

  makeGroup(0, []);
}

let min = Infinity;

const getDists = (stores) => {
  const memo = new Array(houses.length).fill((n + 1) * 2);

  for (const [sx, sy] of stores) {
    for (let i = 0; i < houses.length; i += 1) {
      const [hx, hy] = houses[i];
      memo[i] = Math.min(memo[i], Math.abs(hx - sx) + Math.abs(hy - sy));
    }
  }

  return memo.reduce((acc, cur) => acc + cur, 0);
};

for (const groupStores of storeGroup) {
  min = Math.min(min, getDists(groupStores));
}

console.log(min);
