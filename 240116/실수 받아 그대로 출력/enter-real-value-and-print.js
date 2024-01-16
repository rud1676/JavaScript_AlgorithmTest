const fs = require("fs");

let a = fs.readFileSync(0).toString();

a= Number(a);

console.log(a.toFixed(2));