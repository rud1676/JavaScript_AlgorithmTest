let fs = require("fs");
let input =fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let resultA,resultB;
if (a >b) {
   resultA=0;
}
else {
    resultA=1;
}

if (a==b) {
    resultB=1;
}
else {
   resultB=0;
}

console.log(resultA,resultB);