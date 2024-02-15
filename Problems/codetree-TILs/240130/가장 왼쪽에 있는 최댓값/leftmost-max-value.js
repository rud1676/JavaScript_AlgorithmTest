const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = +input[0];

let numbers = input[1].split(" ").map(Number);

const maxPositions = [];

while (numbers.length > 0) {
    let max_value = Math.max(...numbers);
    let max_position = numbers.indexOf(max_value) + 1;
    maxPositions.push(max_position);
    numbers = numbers.slice(0, numbers.indexOf(max_value));
}

console.log(maxPositions.join(" "));