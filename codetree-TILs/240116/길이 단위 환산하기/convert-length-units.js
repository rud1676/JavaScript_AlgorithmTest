const fs = require("fs");

let _input = fs.readFileSync(0).toString();

_input = Number(_input);

let cm = 1;
let ft = 30.48 * cm ;

let result=_input*ft;

console.log(result.toFixed(1));