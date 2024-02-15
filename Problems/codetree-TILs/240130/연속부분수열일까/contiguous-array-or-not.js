const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let [n1,n2] = input[0].split(" ").map(Number);

let arrA = input[1].split(" ").map(Number);

let arrB = input[2].split(" ").map(Number);

let lenB = arrB.length;


let q =arrA.join("").includes(arrB.join(""));

console.log(q?"Yes":"No");