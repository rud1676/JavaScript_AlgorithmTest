const fs = require("fs");
let input = fs.readFileSync(0).toString();

let n = Number(input);



console.log(n*n);

if(n<5)
{

console.log("tiny"); 
}