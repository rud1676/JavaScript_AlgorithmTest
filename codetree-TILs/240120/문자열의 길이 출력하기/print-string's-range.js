const fs = require("fs");
let givenInput = fs.readFileSync(0).toString().trim().split("\n");
console.log(givenInput[0].length+givenInput[1].length);