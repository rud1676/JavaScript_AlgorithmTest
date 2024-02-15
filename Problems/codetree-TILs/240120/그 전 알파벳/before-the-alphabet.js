const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();


var str = input;

var num = str.charCodeAt()-1;

str=String.fromCharCode(num);

if(input==='a'){
str='z';
}


console.log(str);