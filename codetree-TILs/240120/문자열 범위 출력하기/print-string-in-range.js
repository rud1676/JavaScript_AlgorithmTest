const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
console.log(input.slice(2,10));