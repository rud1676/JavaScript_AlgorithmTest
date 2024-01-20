const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();


var str = input;

var num = str.charCodeAt()-1;

console.log(String.fromCharCode(num));